import { useEffect, useState } from "react";
import useStorage from "./useStorage";
import useFirestore from "./useFirestore";
import { useAuthContext } from "../contexts/AuthContext";
import { formatDate } from "date-fns/format";
import { Status } from "../shared.types";
import ysFixWebmDuration from "fix-webm-duration";

const useRecord = () => {
  console.log(MediaRecorder.isTypeSupported("video/mp4"));

  const [stream, setStream] = useState<MediaStream | null>(null);
  const [recorder, setRecorder] = useState<MediaRecorder | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<Status>("idle");
  const [videoId, setVideoId] = useState<string | null>(null);

  const { uploadFile } = useStorage();
  const { createDoc } = useFirestore("videos");

  const { user } = useAuthContext();

  const startRecording = () => {
    setIsRecording(true);
    createStream();
  };

  const stopRecording = () => {
    recorder?.stop();
    stream?.getTracks().forEach((track) => track.stop());
    setRecorder(null);
    setStream(null);
    setIsRecording(false);
  };

  useEffect(() => {
    if (stream) {
      const recorder = createRecorder(stream);
      setRecorder(recorder);
    }
  }, [stream]);

  const createStream = async () => {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      audio: false,
      video: true,
    });

    console.log(stream);

    setStream(stream);
  };

  const saveVideo = async (chunks: Blob[], duration: number) => {
    setUploadStatus("pending");
    const blob = new Blob(chunks, {
      type: "video/webm",
    });

    const saveToFirestore = async (blob: Blob) => {
      const fileName = `RECAST-${formatDate(
        new Date(),
        "yyyy-MM-dd-hhmm"
      )}.webm`;

      try {
        const url = await uploadFile(blob, fileName);

        const data = {
          name: fileName.replace(".webm", ""),
          ownedBy: user?.uid,
          url,
          length: duration,
        };
        const id = await createDoc(data);
        setVideoId(id);
        setUploadStatus("success");
      } catch (err) {
        console.error(err);
        setUploadStatus("error");
      }
    };
    ysFixWebmDuration(blob, duration, saveToFirestore);
  };

  const createRecorder = (stream: MediaStream) => {
    const recorder = new MediaRecorder(stream, { mimeType: "video/webm" });
    let startTime = 0;
    let stopTime = 0;
    let chunks: Blob[] = [];

    recorder.ondataavailable = (e: BlobEvent) => {
      chunks.push(e.data);
    };

    recorder.onstop = () => {
      stopTime = Date.now();
      console.log("Recording stopped.");
      const duration = stopTime - startTime;
      saveVideo(chunks, duration);
    };

    recorder.onstart = () => {
      startTime = Date.now();
    };
    recorder.start(200);

    return recorder;
  };

  return { startRecording, stopRecording, isRecording, uploadStatus, videoId };
};

export default useRecord;

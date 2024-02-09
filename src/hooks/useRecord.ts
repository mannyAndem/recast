import { useEffect, useState } from "react";
import useStorage from "./useStorage";
import useFirestore from "./useFirestore";
import { useAuthContext } from "../contexts/AuthContext";
import { formatDate } from "date-fns/format";

const useRecord = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [recorder, setRecorder] = useState<MediaRecorder | null>(null);
  // const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

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
      audio: true,
      video: true,
    });

    console.log(stream);

    setStream(stream);
  };

  const saveVideo = async (chunks: Blob[], duration: number) => {
    setIsSaving(true);
    const blob = new Blob(chunks, {
      type: "video/mp4",
    });

    const fileName = `VID-${formatDate(new Date(), "yyyyMMddhhmm")}.mp4`;
    console.log(fileName);
    // store to firebase
    try {
      const url = await uploadFile(blob, fileName);

      const data = {
        name: fileName.replace(".mp4", ""),
        ownedBy: user?.uid,
        url,
        length: duration,
      };
      await createDoc(data);
      setIsSaving(false);
    } catch (err) {
      console.error(err);
    }
  };

  const createRecorder = (stream: MediaStream) => {
    const recorder = new MediaRecorder(stream);
    let startTime: number;
    let stopTime: number;
    let chunks: Blob[] = [];

    recorder.ondataavailable = (e: BlobEvent) => {
      if (e.data.size > 0) {
        console.log("chunk added");
        chunks.push(e.data);
      }
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

  return { startRecording, stopRecording, isRecording, isSaving };
};

export default useRecord;

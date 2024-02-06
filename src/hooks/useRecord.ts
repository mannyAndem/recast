import { useEffect, useState } from "react";

const useRecord = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [recorder, setRecorder] = useState<MediaRecorder | null>(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  const startRecording = () => {
    createStream();
  };

  const stopRecording = () => {
    recorder?.stop();
    setRecorder(null);
    setStream(null);
  };

  console.log(videoSrc);
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

  const saveVideo = (chunks: Blob[]) => {
    const blob = new Blob(chunks, {
      type: "video/mp4",
    });

    const videoLink = URL.createObjectURL(blob);
    setVideoSrc(videoLink);
  };

  const createRecorder = (stream: MediaStream) => {
    const recorder = new MediaRecorder(stream);
    let chunks: Blob[] = [];

    recorder.ondataavailable = (e: BlobEvent) => {
      if (e.data.size > 0) {
        console.log("chunk added");
        chunks.push(e.data);
      }
    };

    recorder.onstop = () => {
      console.log("Recording stopped.");
      saveVideo(chunks);
      chunks = [];
    };

    recorder.start(200);

    return recorder;
  };

  return { videoSrc, startRecording, stopRecording };
};

export default useRecord;

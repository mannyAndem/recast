import { useEffect, useState } from "react";

const useRecord = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [recorder, setRecorder] = useState<MediaRecorder | null>(null);

  useEffect(() => {
    if (stream) {
      const recorder = createRecorder(stream);
      setRecorder(recorder);
    }
  }, [stream]);

  const recordScreen = async () => {
    return await navigator.mediaDevices.getDisplayMedia({
      audio: true,
      video: { mediaSource: "screen" } as any,
    });
  };

  const saveVideo = (chunks: Blob[]) => {
    const blob = new Blob(chunks, {
      type: "video/mp4",
    });

    // TODO: logic to save blob to firestore;
  };

  const createRecorder = (stream: MediaStream) => {
    let chunks: Blob[] = [];

    const recorder = new MediaRecorder(stream);

    recorder.ondataavailable = (e: BlobEvent) => {
      chunks.push(e.data);
    };

    recorder.onstop = () => {
      saveVideo(chunks);
    };

    recorder.start(200);

    return recorder;
  };

  const startRecording = async () => {
    const stream = await recordScreen();
    setStream(stream);
  };

  const stopRecording = () => {
    if (recorder) {
      recorder.stop();
    }
  };

  return { startRecording, stopRecording };
};

export default useRecord;

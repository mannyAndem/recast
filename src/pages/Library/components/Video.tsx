import { useEffect, useRef } from "react";

interface VideoProps {
  src?: string;
}

const Video = ({ src }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef?.current?.load();
  }, [src]);

  return (
    <video
      src={src}
      className="w-full h-full border border-purple"
      autoPlay
      ref={videoRef}
      controls
    />
  );
};

export default Video;

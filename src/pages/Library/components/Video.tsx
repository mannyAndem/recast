interface VideoProps {
  src: string;
}

const Video = ({ src }: VideoProps) => {
  return (
    <video
      src={src}
      className="w-full h-full border border-purple"
      autoPlay
      controls
    />
  );
};

export default Video;

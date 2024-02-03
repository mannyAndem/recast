const VideoCard = () => {
  return (
    <div className="w-full rounded-md shadow-sm p-4 font-inter flex flex-col gap-6 border-lightPurple border">
      <div className="h-36 bg-purple rounded-md bg-opacity-50"></div>
      <div className="flex items-center justify-between text-purple text-xl">
        <span className="font-semibold">Video 1</span>
        <span className="font-medium">2:03</span>
      </div>
    </div>
  );
};

export default VideoCard;

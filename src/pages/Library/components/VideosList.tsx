import VideoCard from "./VideoCard";

const VideosList = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {/* <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard /> */}
      <div className="mt-24 col-span-3">
        <span className="block font-semibold text-center text-4xl text-purple">
          You haven't recorded any videos yet.
        </span>
      </div>
    </div>
  );
};

export default VideosList;

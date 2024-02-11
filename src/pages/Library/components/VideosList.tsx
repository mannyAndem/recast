import VideoCard from "./VideoCard";
import { Video } from "../../../shared.types";

interface VideosListProps {
  videos: Video[];
}

const VideosList = ({ videos }: VideosListProps) => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {videos.length === 0 ? (
        <div className="mt-24 col-span-3">
          <span className="block font-semibold text-center text-4xl text-blue-400">
            You haven't recorded any videos yet.
          </span>
        </div>
      ) : (
        videos.map((video) => <VideoCard video={video} key={video.id} />)
      )}
    </div>
  );
};

export default VideosList;

import { DocumentData } from "firebase/firestore";
import VideoCard from "./VideoCard";

interface VideosListProps {
  videos: DocumentData[];
}

const VideosList = ({ videos }: VideosListProps) => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {/* <div className="mt-24 col-span-3">
        <span className="block font-semibold text-center text-4xl text-purple">
          You haven't recorded any videos yet.
        </span>
      </div> */}
      {videos.map((video) => (
        <VideoCard video={video} />
      ))}
    </div>
  );
};

export default VideosList;

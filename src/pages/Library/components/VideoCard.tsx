import { Link } from "react-router-dom";
import { Video } from "../../../shared.types";
import { parseMillisecondsToMinuteString } from "../../../utils/parseMillisecondsToMinuteString";

interface VideoProps {
  video: Video;
}

const VideoCard = ({ video }: VideoProps) => {
  return (
    <Link
      to={`/videos/${video.id}`}
      className="font-inter flex flex-col gap-4 text-purple  border-2  border-lightPurple rounded-md shadow-sm overflow-hidden"
    >
      <video src={video.url} className="w-full h-full" />
      <div className="px-2 pb-4 flex items-center justify-between">
        <span className="text-xl font-grotesk font-medium">{video.name}</span>
        <span className="text-xl">
          {parseMillisecondsToMinuteString(video.length)}
        </span>
      </div>
    </Link>
  );
};

export default VideoCard;

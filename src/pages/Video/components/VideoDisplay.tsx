import { Video } from "../../../shared.types";
import { parseMillisecondsToMinuteString } from "../../../utils/parseMillisecondsToMinuteString";

interface VideoDisplayProps {
  video: Video;
}

const VideoDisplay = ({ video }: VideoDisplayProps) => {
  return (
    <div className="flex flex-col gap-4 text-purple w-full  ">
      <video
        src={video.url}
        className="w-full h-[60vh] rounded-md shadow-sm border-purple border"
        controls
      />
      <div className="flex items-center justify-between">
        <span className="font-medium font-grotesk text-4xl">{video.name}</span>
        <span className="font-inter text-4xl">
          {parseMillisecondsToMinuteString(video.length)}
        </span>
      </div>
    </div>
  );
};

export default VideoDisplay;

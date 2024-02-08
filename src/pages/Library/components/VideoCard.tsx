import { formatDate } from "date-fns";
import { DocumentData } from "firebase/firestore";

interface VideoProps {
  video: DocumentData;
}

const VideoCard = ({ video }: VideoProps) => {
  return (
    <div className="font-inter flex flex-col gap-4  border-2  border-lightPurple rounded-md shadow-sm overflow-hidden">
      <video src={video.url} className="w-full h-full" />
      <div className="px-2 pb-4 flex items-center">
        <span className="text-xl">{video.name}</span>
      </div>
    </div>
  );
};

export default VideoCard;

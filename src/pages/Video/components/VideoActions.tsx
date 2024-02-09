import { BiDownload } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Video } from "../../../shared.types";
import useDownload from "../../../hooks/useDownload";

interface VideoActionsProps {
  video: Video;
}

const VideoActions = ({ video }: VideoActionsProps) => {
  const { downloadBlob } = useDownload();

  const handleDownload = async () => {
    await downloadBlob(video.url);
  };

  return (
    <div className="h-full flex flex-col gap-8 items-center justify-center">
      <button
        onClick={handleDownload}
        className="bg-purple p-3 rounded-md shadow-sm"
      >
        <BiDownload size={36} className="text-smoke" />
      </button>
      <button className="bg-purple p-3 rounded-md shadow-sm">
        <MdDelete size={36} className="text-smoke" />
      </button>
    </div>
  );
};

export default VideoActions;

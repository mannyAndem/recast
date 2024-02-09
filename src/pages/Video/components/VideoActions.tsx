import { BiDownload } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Video } from "../../../shared.types";
import useDownload from "../../../hooks/useDownload";
import Button from "../../../components/ui/Button";
import useFirestore from "../../../hooks/useFirestore";
import useStorage from "../../../hooks/useStorage";
import { useNavigate } from "react-router-dom";

interface VideoActionsProps {
  video: Video;
}

const VideoActions = ({ video }: VideoActionsProps) => {
  const { downloadBlob, status } = useDownload();
  const { deleteDocument } = useFirestore("videos");
  const { deleteFile } = useStorage();
  const navigate = useNavigate();

  const handleDownload = async () => {
    await downloadBlob(video.url, video.name);
  };

  const handleDelete = async () => {
    try {
      await deleteDocument(video.id);
      await deleteFile(`${video.name}.mp4`);
      navigate("/library");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="h-full flex flex-col gap-8 items-center justify-center">
      <Button onClick={handleDownload} pending={status === "pending"}>
        <div className="flex items-center justify-center">
          <BiDownload size={36} className="text-smoke" />
        </div>
      </Button>
      <Button onClick={handleDelete}>
        <div className="flex justify-center items-center">
          <MdDelete size={36} className="text-smoke" />
        </div>
      </Button>
    </div>
  );
};

export default VideoActions;

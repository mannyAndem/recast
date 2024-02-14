import { BiDownload } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Status, Video } from "../../../shared.types";
import useDownload from "../../../hooks/useDownload";
import Button from "../../../components/ui/Button";
import useFirestore from "../../../hooks/useFirestore";
import useStorage from "../../../hooks/useStorage";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface VideoActionsProps {
  video: Video;
}

const VideoActions = ({ video }: VideoActionsProps) => {
  const { downloadBlob, status } = useDownload();
  const { deleteDocument } = useFirestore("videos");
  const { deleteFile } = useStorage();
  const navigate = useNavigate();

  const [deleteStatus, setDeleteStatus] = useState<Status>("idle");

  const handleDownload = async () => {
    await downloadBlob(video.url, video.name);
  };

  const handleDelete = async () => {
    setDeleteStatus("pending");

    try {
      await deleteDocument(video.id);
      await deleteFile(`${video.name}.mp4`);
      setDeleteStatus("success");
    } catch (err) {
      setDeleteStatus("error");
      console.error(err);
    }
  };

  useEffect(() => {
    if (deleteStatus === "success") {
      navigate("/library");
    }
    if (deleteStatus === "error") {
      toast.error("An error occurred during delete.");
    }
  }, [deleteStatus]);

  return (
    <div className="w-full flex gap-8 items-center justify-center lg:flex-col lg:h-full">
      <Button onClick={handleDownload} pending={status === "pending"}>
        <div className="flex items-center justify-center">
          <BiDownload size={36} className="text-smoke" />
        </div>
      </Button>
      <Button
        onClick={handleDelete}
        variant="secondary"
        pending={deleteStatus === "pending"}
      >
        <div className="flex justify-center items-center">
          <MdDelete size={36} className="text-smoke" />
        </div>
      </Button>
    </div>
  );
};

export default VideoActions;

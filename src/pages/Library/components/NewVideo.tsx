import Button from "../../../components/ui/Button";
import { BsPlay } from "react-icons/bs";
import { BiStop } from "react-icons/bi";
import newVideoIllustration from "../../../assets/images/Monitor-bro.png";
import useRecord from "../../../hooks/useRecord";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NewVideo = () => {
  const { startRecording, stopRecording, uploadStatus, isRecording, videoId } =
    useRecord();
  const navigate = useNavigate();

  useEffect(() => {
    if (uploadStatus === "success") {
      navigate(`/videos/${videoId}`);
    }
  }, [uploadStatus]);

  return (
    <div className="font-inter">
      <h3 className="mb-12 text-3xl font-medium font-grotesk">New Video</h3>
      <div className="mb-12">
        <img
          src={newVideoIllustration}
          className="max-h-60 w-full object-cover"
        />
      </div>
      <div className="flex items-center gap-4">
        <Button onClick={startRecording} disabled={isRecording}>
          <div className="flex items-center justify-center gap-4">
            <span>Start</span>
            <BsPlay size={28} color="#F1EAFF" />
          </div>
        </Button>
        <Button
          onClick={stopRecording}
          disabled={!isRecording}
          pending={uploadStatus === "pending"}
        >
          <div className="flex items-center justify-center gap-4">
            <span>Stop</span>
            <BiStop size={28} color="#F1EAFF" />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default NewVideo;

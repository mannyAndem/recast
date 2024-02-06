import Button from "../../../components/ui/Button";
import { BsPlay } from "react-icons/bs";
import { BiStop } from "react-icons/bi";
import newVideoIllustration from "../../../assets/images/Video tutorial-bro.png";

const NewVideo = () => {
  return (
    <div className="font-inter">
      <h3 className="mb-8 text-3xl font-medium font-grotesk">New Video</h3>
      <div className="mb-8">
        <img
          src={newVideoIllustration}
          className="max-h-60 w-full object-cover"
        />
      </div>
      <div className="flex items-center gap-4">
        <Button>
          <div className="flex items-center justify-center gap-4">
            <span>Start</span>
            <BsPlay size={28} color="#F1EAFF" />
          </div>
        </Button>
        <Button>
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

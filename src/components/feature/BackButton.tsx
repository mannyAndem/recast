import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };
  return (
    <button onClick={handleClick}>
      <BiArrowBack size={24} className="text-blue-400" />
    </button>
  );
};

export default BackButton;

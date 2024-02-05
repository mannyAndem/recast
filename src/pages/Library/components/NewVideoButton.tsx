import { useEffect } from "react";
import Button from "../../../components/ui/Button";
import useRecord from "../../../hooks/useRecord";

const NewVideoButton = () => {
  const { startRecording, stopRecording } = useRecord();

  useEffect(() => {
    setTimeout(() => {
      stopRecording();
    }, 5000);
  }, []);
  return <Button onClick={startRecording}>New Video</Button>;
};

export default NewVideoButton;

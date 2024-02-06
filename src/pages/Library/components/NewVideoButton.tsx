import { useState } from "react";
import Button from "../../../components/ui/Button";
import Modal from "../../../components/ui/Modal";
import NewVideo from "./NewVideo";

const NewVideoButton = () => {
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
  };

  return (
    <>
      <Modal visible={visible} setVisible={setVisible}>
        <NewVideo />
      </Modal>
      <Button onClick={openModal}>New Video</Button>
    </>
  );
};

export default NewVideoButton;

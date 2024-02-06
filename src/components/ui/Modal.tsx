import { PropsWithChildren } from "react";

interface ModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({
  visible,
  children,
  setVisible,
}: PropsWithChildren<ModalProps>) => {
  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div
      onClick={handleClose}
      className={`${
        visible ? "fixed" : "hidden"
      } top-0 left-0 bg-veryLightPurple opacity-40 backdrop-blur-sm right-0 min-h-screen flex items-center justify-center`}
    >
      <div className="w-full max-w-[600px] bg-purple text-smoke rounded-md shaodw-md">
        {children}
      </div>
    </div>
  );
};

export default Modal;

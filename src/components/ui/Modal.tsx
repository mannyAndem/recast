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
  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    if (target.id === "container") {
      setVisible(false);
    }
  };

  return (
    <div
      onClick={handleClose}
      id="container"
      className={`${
        visible ? "fixed" : "hidden"
      } z-20 top-0 left-0 bg-blue-100 bg-opacity-40 backdrop-blur-sm right-0 min-h-screen flex items-center justify-center`}
    >
      <div className="p-5 w-full max-w-[600px] border  border-blue-300 bg-slate-100 text-blue rounded-md shaodw-md">
        {children}
      </div>
    </div>
  );
};

export default Modal;

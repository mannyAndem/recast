import { PropsWithChildren, useEffect, useRef } from "react";
import { handleClickOutside } from "../../utils/handleClickOutside";

interface DropdownProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown = ({
  visible,
  setVisible,
  children,
}: PropsWithChildren<DropdownProps>) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeDropdown = () => {
    setVisible(false);
  };

  return (
    <div
      id="dropdown"
      ref={dropdownRef}
      className={`${
        visible ? "scale-y-100" : "scale-y-0"
      } z-20  origin-top absolute top-[105%] left-1/2 -translate-x-1/2 transition duration-200 ease-out p-3 rounded-md shadow-md bg-slate-100 border border-blue`}
    >
      {children}
    </div>
  );
};

export default Dropdown;

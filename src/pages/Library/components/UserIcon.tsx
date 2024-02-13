import { useState } from "react";
import { useAuthContext } from "../../../contexts/AuthContext";
import Dropdown from "../../../components/ui/Dropdown";
import { BiCaretDown } from "react-icons/bi";
import LogoutButton from "../../../components/feature/LogoutButton";

const UserIcon = () => {
  const { user } = useAuthContext();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleClick = () => {
    setDropdownVisible((prev) => !prev);
  };

  return (
    <div className="relative">
      <button onClick={handleClick} className="flex items-center gap-2">
        <div className="bg-slate-100 w-12 h-12 rounded-full text-blue-400 shadow-sm text-2xl font-bold flex items-center justify-center">
          {user?.displayName?.charAt(0).toUpperCase()}
        </div>
        <BiCaretDown
          size={24}
          className={`${
            dropdownVisible ? "rotate-180" : ""
          } transform transition-all duration-200 ease-out text-slate-100`}
        />
      </button>
      <Dropdown visible={dropdownVisible}>
        <div className="flex flex-col items-center gap-4 text-blue-400 text-2xl p-3">
          <LogoutButton />
        </div>
      </Dropdown>
    </div>
  );
};

export default UserIcon;

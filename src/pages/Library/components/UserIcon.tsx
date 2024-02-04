import { useAuthContext } from "../../../contexts/AuthContext";

const UserIcon = () => {
  const { user } = useAuthContext();

  return (
    <div className="bg-smoke w-12 h-12 rounded-full text-purple shadow-sm text-2xl font-bold flex items-center justify-center">
      {user?.displayName?.charAt(0).toUpperCase()}
    </div>
  );
};

export default UserIcon;

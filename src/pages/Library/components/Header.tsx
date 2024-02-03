import UserIcon from "./UserIcon";

const Header = () => {
  return (
    <div className="rounded-b-md p-5 bg-purple text-smoke flex items-center justify-between">
      <h1 className="text-2xl font-bold font-grotesk">RECAST</h1>
      <UserIcon />
    </div>
  );
};

export default Header;

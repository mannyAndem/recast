import { useAuthContext } from "../../contexts/AuthContext";

const Dashboard = () => {
  const { user } = useAuthContext();

  return (
    <div>
      <h1 className="text-2xl text-center">Welcome {user?.email}</h1>
    </div>
  );
};

export default Dashboard;

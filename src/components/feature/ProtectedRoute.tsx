import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { PropsWithChildren } from "react";

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { user } = useAuthContext();
  const { pathname } = useLocation();

  if (!user) {
    return <Navigate to="login" state={{ from: pathname }} />;
  }

  return children;
};

export default ProtectedRoute;

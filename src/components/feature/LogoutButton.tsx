import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import Button from "../ui/Button";
import { Status } from "../../shared.types";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const LogoutButton = () => {
  const { logout } = useAuthContext();
  const [status, setStatus] = useState<Status>("idle");
  const navigate = useNavigate();

  const handleClick = async () => {
    setStatus("pending");
    try {
      await logout();
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  useEffect(() => {
    if (status === "error") {
      toast.error("An error occurred during logout.");
    }
  }, [status]);
  return (
    <>
      <Toaster />
      <Button
        onClick={handleClick}
        variant="secondary"
        pending={status === "pending"}
      >
        Logout
      </Button>
    </>
  );
};

export default LogoutButton;

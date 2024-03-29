import { HashLoader } from "react-spinners";

interface LoaderProps {
  variant?: "light" | "dark";
  size?: "sm" | "lg";
}

const Loader = ({ variant = "dark", size = "sm" }: LoaderProps) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <HashLoader
        color={variant === "light" ? "#F1F5F9" : "#60A5FA"}
        size={size === "lg" ? 124 : 24}
      />
    </div>
  );
};

export default Loader;

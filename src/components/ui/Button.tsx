import { PropsWithChildren } from "react";
import Loader from "./Loader";

interface ButtonProps {
  variant?: "primary" | "secondary";
  outline?: boolean;
  pending?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  children,
  variant,
  pending,
  disabled,
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  const primaryClass = "bg-purple text-smoke";
  const secondaryClass = "bg-transparent text-purple border-purple";

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`relative text-2xl w-full p-3 rounded-md shadow-sm ${
        variant === "secondary" ? secondaryClass : primaryClass
      } font-grotesk disabled:opacity-60`}
    >
      <div className={pending ? "opacity-0" : "opacity-100"}>{children}</div>
      <div className={pending ? "block" : "hidden"}>
        <Loader variant="light" size="sm" />
      </div>
    </button>
  );
};

export default Button;

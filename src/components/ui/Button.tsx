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
  const primaryClass = "bg-blue-400 text-slate-100";
  const secondaryClass = "bg-slate-100 text-blue-400 border-blue-400 border";

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`relative w-full p-3 text-xl rounded-md shadow-sm lg:text-2xl ${
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

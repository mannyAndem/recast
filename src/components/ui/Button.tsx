import { PropsWithChildren } from "react";
import Loader from "./Loader";

interface ButtonProps {
  variant?: "primary" | "secondary";
  outline?: boolean;
  pending?: boolean;
  disabled?: boolean;
}

const Button = ({
  children,
  variant,
  outline,
  pending,
  disabled,
}: PropsWithChildren<ButtonProps>) => {
  if (variant === "secondary") {
    return <button>{children}</button>;
  }

  return (
    <button
      disabled={disabled}
      className="relative text-2xl w-full p-3 rounded-md shadow-sm bg-purple text-smoke font-grotesk disabled:opacity-60"
    >
      <div className={pending ? "opacity-0" : "opacity-100"}>{children}</div>
      <div className={pending ? "block" : "hidden"}>
        <Loader variant="light" size="sm" />
      </div>
    </button>
  );
};

export default Button;

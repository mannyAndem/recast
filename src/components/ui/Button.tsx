import { PropsWithChildren } from "react";

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
      className="text-2xl w-full p-3 rounded-md shadow-sm bg-purple text-smoke font-grotesk disabled:opacity-60"
    >
      {children}
    </button>
  );
};

export default Button;

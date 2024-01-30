import { Field } from "formik";
import { HTMLInputTypeAttribute } from "react";

interface InputProps {
  name: string;
  value: string;
  error?: string;
  touched?: boolean;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}

const Input = ({
  name,
  value,
  error,
  touched,
  placeholder,
  type,
}: InputProps) => {
  return (
    <Field
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      autoComplete="off"
      className={`${
        error && touched
          ? "border-red-400 bg-red-100 focus:outline-red-400"
          : "bg-veryLightPurple"
      } p-3 rounded-md shadow-sm border-2 bg-opacity-20 border-lightPurple focus:outline-purple`}
    />
  );
};

export default Input;

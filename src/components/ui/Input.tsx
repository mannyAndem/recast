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
          : "bg-white"
      } p-2 lg:p-3 rounded-md font-inter shadow-sm border-2 bg-opacity-20 text-gray-900 border-blue-400 focus:outline-blue-700`}
    />
  );
};

export default Input;

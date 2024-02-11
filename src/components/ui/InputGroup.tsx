import Input from "./Input";

interface InputGroupProps {
  name: string;
  value: string;
  error?: string;
  type?: string;
  label: string;
  touched?: boolean;
}

const InputGroup = ({
  name,
  value,
  error,
  type,
  label,
  touched,
}: InputGroupProps) => {
  return (
    <div className="flex flex-col gap-3 text-gray-800">
      <label
        htmlFor={name}
        className={
          touched && error ? "text-red-300 font-medium" : "font-medium"
        }
      >
        {label}
      </label>
      <Input
        name={name}
        value={value}
        type={type}
        error={error}
        touched={touched}
      />
      {error && touched && <span className="text-red-300">{error}</span>}
    </div>
  );
};

export default InputGroup;

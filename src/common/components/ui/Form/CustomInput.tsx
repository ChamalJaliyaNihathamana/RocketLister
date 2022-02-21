import * as React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string;
  register?: any;
  wrapperClass?: string;
  className?: string;
}

const CustomInput: React.FunctionComponent<InputProps> = ({
  register,
  name,
  error,
  label,
  wrapperClass,
  ...rest
}) => {
  return (
    <div className={wrapperClass}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        aria-invalid={error ? "true" : "false"}
        {...register(name)}
        {...rest}
      />
      {error && <span role="alert">{error}</span>}
    </div>
  );
};

export default CustomInput;
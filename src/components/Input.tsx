import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
  const { value, onChange, placeholder, type = "text", name } = props;

  return (
    <div>
      <label>
        <input
        className="input"
          value={value}
          name={name}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
};

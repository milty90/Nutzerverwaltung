import type { ChangeEventHandler } from "react";
import "./InputField.scss";

type Props = {
  title: string;
  type: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  error?: boolean;
};

function InputField({
  title,
  type,
  placeholder,
  onChange,
  value,
  error,
}: Props) {
  return (
    <div className="input-container">
      <p className="input-label">{title}</p>
      <input
        className={`input-field${error ? " input-field--error" : ""}`}
        type={type}
        lang="en-US"
        placeholder={
          error ? `Bitte ${placeholder.toLowerCase()} eingeben` : placeholder
        }
        onChange={onChange}
        value={value}
        aria-invalid={error ? "true" : "false"}
      />
    </div>
  );
}

export default InputField;

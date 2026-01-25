import { useState, type ChangeEvent } from "react";

export function useFromInput(value: string, required = false) {
  const [inputValue, setInputValue] = useState(value);
  const [error, setError] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    console.log(e.target.value);
    setInputValue(e.target.value);
    setError(required && e.target.value.trim() === "");
    validate(e.target.value);
  }

  function validate(inputVal: string): boolean {
    if (required && inputVal.trim() === "") {
      setError(true);
      return false;
    }
    setError(false);
    return true;
  }

  return { inputValue, handleChange, error, validate };
}

export default useFromInput;

import { useState, type ChangeEvent } from "react";

export function useFromInput(value: string) {
  const [inputValue, setInputValue] = useState(value);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    console.log(e.target.value);
    setInputValue(e.target.value);
  }
  return { inputValue, handleChange };
}

export default useFromInput;

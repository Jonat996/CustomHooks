import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [Counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter(Counter + 1);
  };
  const decrement = () => {
    if (Counter == 0) return;

    setCounter(Counter - 1);
  };
  const reset = () => {
    setCounter(initialValue);
  };

  return {
    Counter,
    increment,
    decrement,
    reset,
  };
};

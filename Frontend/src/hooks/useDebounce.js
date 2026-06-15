import { useState, useEffect } from "react";

/**
 * useDebounce — debounces a value by a given delay (ms)
 * @param {any} value
 * @param {number} delay - milliseconds
 * @returns {any} debounced value
 */
export const useDebounce = (value, delay = 300) => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
};

export default useDebounce;

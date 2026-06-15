import React from "react";
import { useDebounce } from "../../hooks/useDebounce";

/**
 * SearchBar component with debounced onChange
 * @param {object} props
 * @param {string} props.value - Controlled value
 * @param {function} props.onChange - (value: string) => void (debounced)
 * @param {string} props.placeholder
 * @param {number} props.debounceMs
 * @param {string} props.className
 */
const SearchBar = ({
  value,
  onChange,
  placeholder = "Search...",
  debounceMs = 300,
  className = "",
}) => {
  const [localValue, setLocalValue] = React.useState(value ?? "");
  const debouncedValue = useDebounce(localValue, debounceMs);

  React.useEffect(() => {
    onChange?.(debouncedValue);
  }, [debouncedValue]);

  React.useEffect(() => {
    if (value !== undefined && value !== localValue) {
      setLocalValue(value);
    }
  }, [value]);

  return (
    <div className={`relative ${className}`}>
      <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 pointer-events-none">
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
          />
        </svg>
      </span>
      <input
        type="search"
        id="search-bar"
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-4 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500"
      />
      {localValue && (
        <button
          onClick={() => {
            setLocalValue("");
            onChange?.("");
          }}
          aria-label="Clear search"
          className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchBar;

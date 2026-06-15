import React, { forwardRef } from "react";

/**
 * Reusable Input component
 * @param {object} props
 * @param {string} props.label
 * @param {string} props.id
 * @param {string} props.type
 * @param {string} props.placeholder
 * @param {string} props.error
 * @param {string} props.helperText
 * @param {React.ReactNode} props.leftIcon
 * @param {React.ReactNode} props.rightIcon
 * @param {boolean} props.required
 * @param {string} props.className
 */
const Input = forwardRef(
  (
    {
      label,
      id,
      type = "text",
      placeholder,
      error,
      helperText,
      leftIcon,
      rightIcon,
      required = false,
      className = "",
      ...rest
    },
    ref
  ) => {
    const baseInput =
      "w-full rounded-lg border bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:outline-none focus:ring-2 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500";
    const stateStyles = error
      ? "border-red-400 focus:ring-red-400"
      : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:border-gray-600";

    return (
      <div className={`flex flex-col gap-1 ${className}`}>
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {label}
            {required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            id={id}
            type={type}
            placeholder={placeholder}
            className={`${baseInput} ${stateStyles} ${leftIcon ? "pl-10" : ""} ${rightIcon ? "pr-10" : ""}`}
            {...rest}
          />
          {rightIcon && (
            <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
              {rightIcon}
            </span>
          )}
        </div>
        {error && <p className="text-xs text-red-500">{error}</p>}
        {!error && helperText && (
          <p className="text-xs text-gray-500 dark:text-gray-400">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;

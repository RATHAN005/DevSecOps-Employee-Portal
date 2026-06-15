import React, { forwardRef } from "react";

/**
 * Reusable Select component
 * @param {object} props
 * @param {string} props.label
 * @param {string} props.id
 * @param {Array<{value:string, label:string}>} props.options
 * @param {string} props.error
 * @param {string} props.placeholder
 * @param {boolean} props.required
 * @param {string} props.className
 */
const Select = forwardRef(
  (
    {
      label,
      id,
      options = [],
      error,
      placeholder = "Select an option",
      required = false,
      className = "",
      ...rest
    },
    ref
  ) => {
    const baseStyles =
      "w-full rounded-lg border bg-white px-3 py-2 text-sm text-gray-900 transition-colors focus:outline-none focus:ring-2 dark:bg-gray-800 dark:text-gray-100 appearance-none cursor-pointer";
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
          <select
            ref={ref}
            id={id}
            className={`${baseStyles} ${stateStyles} pr-8`}
            {...rest}
          >
            <option value="">{placeholder}</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;

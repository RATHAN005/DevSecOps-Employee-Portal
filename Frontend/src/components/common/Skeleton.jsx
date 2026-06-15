import React from "react";

/**
 * Skeleton loading placeholder
 * @param {object} props
 * @param {string} props.className - Additional Tailwind classes for width/height
 * @param {"rect"|"circle"|"text"} props.variant
 * @param {number} props.lines - Number of text lines (only for variant="text")
 */
const Skeleton = ({ className = "", variant = "rect", lines = 1 }) => {
  const base =
    "animate-pulse bg-gray-200 dark:bg-gray-700";

  if (variant === "circle") {
    return <div className={`${base} rounded-full ${className}`} />;
  }

  if (variant === "text") {
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={`${base} h-4 rounded ${i === lines - 1 && lines > 1 ? "w-3/4" : "w-full"}`}
          />
        ))}
      </div>
    );
  }

  // rect (default)
  return <div className={`${base} rounded-lg ${className}`} />;
};

export default Skeleton;

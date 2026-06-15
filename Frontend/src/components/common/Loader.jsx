import React from "react";

/**
 * Full-page or inline Loader/Spinner
 * @param {object} props
 * @param {"sm"|"md"|"lg"} props.size
 * @param {boolean} props.fullPage - Cover the entire viewport
 * @param {string} props.text - Optional loading text
 */
const Loader = ({ size = "md", fullPage = false, text = "" }) => {
  const sizes = {
    sm: "h-5 w-5 border-2",
    md: "h-8 w-8 border-2",
    lg: "h-12 w-12 border-4",
  };

  const spinner = (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className={`${sizes[size]} animate-spin rounded-full border-indigo-500 border-t-transparent`}
        role="status"
        aria-label="Loading"
      />
      {text && (
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {text}
        </p>
      )}
    </div>
  );

  if (fullPage) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default Loader;

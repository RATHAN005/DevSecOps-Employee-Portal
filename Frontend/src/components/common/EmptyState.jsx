import React from "react";

/**
 * EmptyState component — shown when a list/table has no data
 * @param {object} props
 * @param {React.ReactNode} props.icon
 * @param {string} props.title
 * @param {string} props.description
 * @param {React.ReactNode} props.action - Optional CTA button/link
 */
const EmptyState = ({
  icon,
  title = "No results found",
  description = "There are no items to display at the moment.",
  action,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      {icon ? (
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-400 dark:bg-gray-800">
          {icon}
        </div>
      ) : (
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
          <svg
            className="h-8 w-8 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6m16 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4m16 0H4"
            />
          </svg>
        </div>
      )}
      <h3 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mb-4 max-w-sm text-sm text-gray-500 dark:text-gray-400">
        {description}
      </p>
      {action && <div>{action}</div>}
    </div>
  );
};

export default EmptyState;

import React from "react";

/**
 * StatCard — KPI metric card for the dashboard
 * @param {object} props
 * @param {string} props.title
 * @param {string|number} props.value
 * @param {string} props.subtitle - e.g. "+5% from last month"
 * @param {React.ReactNode} props.icon
 * @param {"indigo"|"green"|"yellow"|"red"} props.color
 */
const StatCard = ({ title, value, subtitle, icon, color = "indigo" }) => {
  const colorMap = {
    indigo: "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
    green:  "bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    yellow: "bg-yellow-50 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
    red:    "bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400",
  };

  return (
    <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      {icon && (
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${colorMap[color]}`}>
          {icon}
        </div>
      )}
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
        {subtitle && (
          <p className="mt-0.5 text-xs text-gray-400 dark:text-gray-500">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default StatCard;

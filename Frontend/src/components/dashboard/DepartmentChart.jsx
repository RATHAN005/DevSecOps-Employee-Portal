import React from "react";

/**
 * DepartmentChart — horizontal bar chart placeholder per department
 */
const DepartmentChart = ({ data = [] }) => {
  const max = Math.max(...data.map((d) => d.count), 1);

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <h3 className="mb-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
        Employees by Department
      </h3>
      {data.length === 0 ? (
        <div className="flex h-32 items-center justify-center text-sm text-gray-400">
          No data available
        </div>
      ) : (
        <ul className="space-y-3">
          {data.map((d, i) => (
            <li key={i}>
              <div className="mb-1 flex justify-between text-xs">
                <span className="text-gray-600 dark:text-gray-400">{d.name}</span>
                <span className="font-medium text-gray-800 dark:text-gray-200">{d.count}</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                <div
                  className="h-full rounded-full bg-indigo-500 transition-all"
                  style={{ width: `${(d.count / max) * 100}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DepartmentChart;

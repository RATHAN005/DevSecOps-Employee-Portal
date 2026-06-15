import React from "react";

/**
 * LeaveChart — Leave status donut/bar chart placeholder
 */
const LeaveChart = ({ data = [] }) => {
  const COLORS = ["bg-yellow-400", "bg-blue-400", "bg-red-400", "bg-green-400"];

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <h3 className="mb-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
        Leave Summary
      </h3>
      {data.length === 0 ? (
        <div className="flex h-32 items-center justify-center text-sm text-gray-400">
          No data available
        </div>
      ) : (
        <ul className="space-y-3">
          {data.map((d, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className={`h-3 w-3 shrink-0 rounded-full ${COLORS[i % COLORS.length]}`} />
              <div className="flex-1">
                <div className="mb-1 flex justify-between text-xs">
                  <span className="text-gray-600 dark:text-gray-400">{d.label}</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">{d.value}</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-gray-100 dark:bg-gray-800">
                  <div
                    className={`h-1.5 rounded-full ${COLORS[i % COLORS.length]}`}
                    style={{ width: `${d.pct ?? 50}%` }}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LeaveChart;

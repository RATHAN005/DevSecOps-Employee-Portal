import React from "react";

/**
 * EmployeeGrowthChart — line/area chart placeholder
 */
const EmployeeGrowthChart = ({ data = [] }) => {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <h3 className="mb-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
        Employee Growth
      </h3>
      {data.length === 0 ? (
        <div className="flex h-40 items-center justify-center text-sm text-gray-400">
          No data available
        </div>
      ) : (
        <div className="flex h-40 items-end gap-2">
          {data.map((d, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <div
                className="w-full rounded-t bg-green-400 transition-all"
                style={{ height: `${(d.value / Math.max(...data.map((x) => x.value))) * 140}px` }}
              />
              <span className="text-xs text-gray-400">{d.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EmployeeGrowthChart;

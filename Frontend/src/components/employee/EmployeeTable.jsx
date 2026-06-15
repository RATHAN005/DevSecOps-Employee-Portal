import React from "react";
import EmptyState from "../common/EmptyState";

/**
 * EmployeeTable — tabular list of employees
 * @param {object} props
 * @param {Array} props.employees
 * @param {boolean} props.loading
 * @param {function} props.onView
 * @param {function} props.onEdit
 * @param {function} props.onDelete
 */
const EmployeeTable = ({ employees = [], loading = false, onView, onEdit, onDelete }) => {
  const statusBadge = {
    active:     "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    inactive:   "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
    terminated: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };

  if (!loading && employees.length === 0) {
    return <EmptyState title="No employees found" description="Add employees to get started." />;
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
        <thead className="bg-gray-50 dark:bg-gray-800/60">
          <tr>
            {["Name", "Department", "Position", "Email", "Status", "Actions"].map((h) => (
              <th
                key={h}
                className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
          {loading
            ? Array.from({ length: 5 }).map((_, i) => (
                <tr key={i} className="animate-pulse">
                  {Array.from({ length: 6 }).map((__, j) => (
                    <td key={j} className="px-5 py-4">
                      <div className="h-4 rounded bg-gray-200 dark:bg-gray-700" />
                    </td>
                  ))}
                </tr>
              ))
            : employees.map((emp) => (
                <tr
                  key={emp.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800/40"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                        {emp.name?.[0]?.toUpperCase()}
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{emp.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-600 dark:text-gray-400">{emp.department}</td>
                  <td className="px-5 py-4 text-sm text-gray-600 dark:text-gray-400">{emp.position}</td>
                  <td className="px-5 py-4 text-sm text-gray-600 dark:text-gray-400">{emp.email}</td>
                  <td className="px-5 py-4">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${statusBadge[emp.status] ?? statusBadge.inactive}`}>
                      {emp.status ?? "inactive"}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex gap-3">
                      <button onClick={() => onView?.(emp)} className="text-xs text-indigo-600 hover:underline dark:text-indigo-400">View</button>
                      <button onClick={() => onEdit?.(emp)} className="text-xs text-gray-500 hover:underline dark:text-gray-400">Edit</button>
                      <button onClick={() => onDelete?.(emp)} className="text-xs text-red-500 hover:underline">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;

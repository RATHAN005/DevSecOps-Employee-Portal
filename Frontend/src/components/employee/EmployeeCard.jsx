import React from "react";

/**
 * EmployeeCard — card view for an employee
 * @param {object} props
 * @param {object} props.employee
 * @param {function} props.onView
 * @param {function} props.onEdit
 * @param {function} props.onDelete
 */
const EmployeeCard = ({ employee, onView, onEdit, onDelete }) => {
  const { name, email, department, position, status, avatar } = employee ?? {};

  const statusBadge = {
    active:     "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    inactive:   "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
    terminated: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      {/* Avatar + name */}
      <div className="flex items-center gap-3">
        {avatar ? (
          <img src={avatar} alt={name} className="h-12 w-12 rounded-full object-cover" />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-lg font-bold text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
            {name?.[0]?.toUpperCase() ?? "?"}
          </div>
        )}
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">{name}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{position}</p>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
        <p>{email}</p>
        <p>{department}</p>
      </div>

      {/* Status + actions */}
      <div className="flex items-center justify-between">
        <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${statusBadge[status] ?? statusBadge.inactive}`}>
          {status ?? "inactive"}
        </span>
        <div className="flex gap-2">
          <button onClick={() => onView?.(employee)} className="text-xs text-indigo-600 hover:underline dark:text-indigo-400">View</button>
          <button onClick={() => onEdit?.(employee)} className="text-xs text-gray-500 hover:underline dark:text-gray-400">Edit</button>
          <button onClick={() => onDelete?.(employee)} className="text-xs text-red-500 hover:underline">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;

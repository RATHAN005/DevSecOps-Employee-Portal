import React from "react";

/**
 * EmployeeDetails — detailed info panel for a single employee
 * @param {object} props
 * @param {object} props.employee
 * @param {function} props.onEdit
 * @param {function} props.onBack
 */
const EmployeeDetails = ({ employee, onEdit, onBack }) => {
  if (!employee) return null;

  const { name, email, phone, department, position, status, hiredAt, avatar } = employee;

  const Section = ({ label, value }) => (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">{label}</p>
      <p className="mt-0.5 text-sm text-gray-800 dark:text-gray-200">{value ?? "—"}</p>
    </div>
  );

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      {/* Back */}
      <button onClick={onBack} className="mb-4 flex items-center gap-1 text-sm text-gray-500 hover:text-indigo-600 dark:text-gray-400">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>

      {/* Header */}
      <div className="flex items-center gap-4">
        {avatar ? (
          <img src={avatar} alt={name} className="h-16 w-16 rounded-full object-cover" />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-2xl font-bold text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
            {name?.[0]?.toUpperCase()}
          </div>
        )}
        <div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">{name}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">{position} &mdash; {department}</p>
        </div>
        <button onClick={() => onEdit?.(employee)} className="ml-auto rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
          Edit
        </button>
      </div>

      {/* Info grid */}
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
        <Section label="Email" value={email} />
        <Section label="Phone" value={phone} />
        <Section label="Department" value={department} />
        <Section label="Position" value={position} />
        <Section label="Status" value={status} />
        <Section label="Hired" value={hiredAt} />
      </div>
    </div>
  );
};

export default EmployeeDetails;

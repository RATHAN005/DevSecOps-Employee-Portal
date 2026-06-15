import React from "react";

/**
 * RecentActivity feed
 * @param {object} props
 * @param {Array<{id, user, action, time, type}>} props.activities
 */
const RecentActivity = ({ activities = [] }) => {
  const typeIcon = {
    added: (
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30">
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </span>
    ),
    updated: (
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30">
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828A2 2 0 019 17H7v-2a2 2 0 01.586-1.414L9 13z" />
        </svg>
      </span>
    ),
    deleted: (
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/30">
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </span>
    ),
  };

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <h3 className="mb-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
        Recent Activity
      </h3>
      {activities.length === 0 ? (
        <p className="text-center text-sm text-gray-400">No recent activity.</p>
      ) : (
        <ul className="space-y-3">
          {activities.map((a) => (
            <li key={a.id} className="flex items-start gap-3">
              {typeIcon[a.type] ?? typeIcon.updated}
              <div>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  <span className="font-medium">{a.user}</span> {a.action}
                </p>
                <p className="text-xs text-gray-400">{a.time}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecentActivity;

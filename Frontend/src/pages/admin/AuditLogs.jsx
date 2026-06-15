import React from "react";

const SAMPLE_LOGS = [
  { id: 1, user: "admin@example.com", action: "Created employee John Doe",     timestamp: "2025-06-14 10:32:01", severity: "info"    },
  { id: 2, user: "hr@example.com",    action: "Updated salary for Jane Smith", timestamp: "2025-06-14 09:15:22", severity: "warning" },
  { id: 3, user: "admin@example.com", action: "Deleted employee #102",         timestamp: "2025-06-13 17:45:00", severity: "danger"  },
];

const severityBadge = {
  info:    "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  warning: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  danger:  "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
};

/**
 * Audit Logs admin page
 */
const AuditLogs = () => (
  <div className="flex flex-col gap-6">
    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Audit Logs</h1>
    <div className="overflow-x-auto rounded-xl border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
        <thead className="bg-gray-50 dark:bg-gray-800/60">
          <tr>
            {["User", "Action", "Timestamp", "Severity"].map((h) => (
              <th key={h} className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
          {SAMPLE_LOGS.map((log) => (
            <tr key={log.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/40">
              <td className="px-5 py-4 text-sm text-gray-800 dark:text-gray-200">{log.user}</td>
              <td className="px-5 py-4 text-sm text-gray-600 dark:text-gray-400">{log.action}</td>
              <td className="px-5 py-4 text-xs text-gray-500 dark:text-gray-400 font-mono">{log.timestamp}</td>
              <td className="px-5 py-4">
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${severityBadge[log.severity]}`}>
                  {log.severity}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default AuditLogs;

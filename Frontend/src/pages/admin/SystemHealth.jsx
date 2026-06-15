import React from "react";

const SERVICES = [
  { name: "API Server",       status: "healthy", latency: "42ms",  uptime: "99.98%" },
  { name: "Database",         status: "healthy", latency: "8ms",   uptime: "99.99%" },
  { name: "Auth Service",     status: "healthy", latency: "15ms",  uptime: "99.97%" },
  { name: "File Storage",     status: "degraded",latency: "220ms", uptime: "98.50%" },
  { name: "Notification Svc", status: "healthy", latency: "30ms",  uptime: "99.90%" },
];

const dot = { healthy: "bg-green-400", degraded: "bg-yellow-400", down: "bg-red-500" };
const badge = {
  healthy:  "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  degraded: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  down:     "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
};

/**
 * System Health admin page
 */
const SystemHealth = () => (
  <div className="flex flex-col gap-6">
    <div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">System Health</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400">Real-time service status</p>
    </div>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {SERVICES.map((s) => (
        <div key={s.name} className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-800 dark:text-white">{s.name}</h3>
            <span className={`flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${badge[s.status]}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${dot[s.status]}`} />
              {s.status}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-xs text-gray-400">Latency</p>
              <p className="font-medium text-gray-800 dark:text-gray-200">{s.latency}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Uptime</p>
              <p className="font-medium text-gray-800 dark:text-gray-200">{s.uptime}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SystemHealth;

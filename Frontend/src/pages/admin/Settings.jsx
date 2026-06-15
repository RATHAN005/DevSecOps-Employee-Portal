import React from "react";

/**
 * Admin Settings page
 */
const Settings = () => (
  <div className="flex flex-col gap-6">
    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Application settings will appear here.
      </p>
    </div>
  </div>
);

export default Settings;

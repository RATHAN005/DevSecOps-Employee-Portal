import React from "react";
import { Link, useNavigate } from "react-router-dom";

/**
 * 403 Unauthorized error page
 */
const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center dark:bg-gray-950">
      <p className="text-8xl font-extrabold text-red-500 dark:text-red-400">403</p>
      <h1 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">Access Denied</h1>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        You don&apos;t have permission to access this page. Contact your administrator.
      </p>
      <div className="mt-6 flex gap-3">
        <button
          onClick={() => navigate(-1)}
          className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          Go Back
        </button>
        <Link
          to="/dashboard"
          className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Unauthorized;

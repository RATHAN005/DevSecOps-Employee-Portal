import React from "react";
import { Link } from "react-router-dom";

/**
 * 404 Not Found error page
 */
const NotFound = () => (
  <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center dark:bg-gray-950">
    <p className="text-8xl font-extrabold text-indigo-600 dark:text-indigo-400">404</p>
    <h1 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">Page not found</h1>
    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
      Sorry, the page you are looking for doesn&apos;t exist or has been moved.
    </p>
    <Link
      to="/dashboard"
      className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
    >
      Back to Dashboard
    </Link>
  </div>
);

export default NotFound;

import React from "react";

/**
 * Footer component
 */
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-3 dark:border-gray-800 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-between gap-1 sm:flex-row">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          &copy; {year} DevSecOps Employee Portal. All rights reserved.
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-500">
          v1.0.0 &mdash; Built with React &amp; Vite
        </p>
      </div>
    </footer>
  );
};

export default Footer;

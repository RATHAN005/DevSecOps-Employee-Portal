/**
 * Date utility helpers
 */

/**
 * Format a date string or Date object to a human-readable form.
 * @param {string|Date} date
 * @param {Intl.DateTimeFormatOptions} options
 * @returns {string}
 */
export const formatDate = (date, options = {}) => {
  if (!date) return "—";
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    ...options,
  }).format(new Date(date));
};

/**
 * Format a date to ISO date string (YYYY-MM-DD).
 * @param {string|Date} date
 */
export const toISODate = (date) => {
  if (!date) return "";
  return new Date(date).toISOString().split("T")[0];
};

/**
 * Get a relative time string (e.g., "3 hours ago").
 * @param {string|Date} date
 */
export const timeAgo = (date) => {
  if (!date) return "";
  const now   = Date.now();
  const then  = new Date(date).getTime();
  const diff  = Math.round((now - then) / 1000); // seconds

  if (diff < 60)   return `${diff}s ago`;
  if (diff < 3600) return `${Math.round(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.round(diff / 3600)}h ago`;
  return `${Math.round(diff / 86400)}d ago`;
};

/**
 * Check if a date is in the past.
 * @param {string|Date} date
 */
export const isPast = (date) => new Date(date) < new Date();

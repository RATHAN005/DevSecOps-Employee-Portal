/**
 * Formatter utilities
 */

/**
 * Format a number as currency.
 * @param {number} amount
 * @param {string} currency
 * @param {string} locale
 */
export const formatCurrency = (amount, currency = "USD", locale = "en-US") => {
  if (amount == null) return "—";
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(amount);
};

/**
 * Format a number with comma separators.
 * @param {number} value
 */
export const formatNumber = (value) => {
  if (value == null) return "—";
  return new Intl.NumberFormat("en-US").format(value);
};

/**
 * Capitalize the first letter of a string.
 * @param {string} str
 */
export const capitalize = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Truncate a string to a max length, appending "…".
 * @param {string} str
 * @param {number} maxLen
 */
export const truncate = (str, maxLen = 50) => {
  if (!str || str.length <= maxLen) return str;
  return str.slice(0, maxLen) + "…";
};

/**
 * Format bytes to a human-readable size string.
 * @param {number} bytes
 */
export const formatBytes = (bytes) => {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${units[i]}`;
};

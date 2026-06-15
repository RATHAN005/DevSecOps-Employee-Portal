/**
 * App-wide constants
 */

export const APP_NAME = "DevSecOps Employee Portal";
export const APP_VERSION = "1.0.0";

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:5000/api";

export const TOKEN_KEY   = "devsecops_token";
export const USER_KEY    = "devsecops_user";
export const THEME_KEY   = "devsecops_theme";

export const ROLES = {
  ADMIN:    "admin",
  MANAGER:  "manager",
  EMPLOYEE: "employee",
};

export const DEPARTMENTS = [
  "Engineering",
  "Design",
  "Marketing",
  "Human Resources",
  "Finance",
  "Operations",
];

export const EMPLOYEE_STATUS = {
  ACTIVE:     "active",
  INACTIVE:   "inactive",
  TERMINATED: "terminated",
};

export const PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

export const DEFAULT_PAGE_SIZE = 10;

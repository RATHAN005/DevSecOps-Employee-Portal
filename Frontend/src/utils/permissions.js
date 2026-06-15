import { ROLES } from "./constants";

/**
 * Permissions utility
 * Centralizes role-based access control checks.
 */

export const isAdmin = (user) => user?.role === ROLES.ADMIN;

export const isManager = (user) =>
  user?.role === ROLES.ADMIN || user?.role === ROLES.MANAGER;

export const canManageEmployees = (user) => isManager(user);

export const canViewAnalytics = (user) => isManager(user);

export const canAccessAdminPanel = (user) => isAdmin(user);

export const canDeleteEmployee = (user) => isAdmin(user);

/**
 * Generic permission check
 * @param {object} user
 * @param {string} permission - one of: "manage_employees", "view_analytics", "admin_panel", "delete_employee"
 */
export const hasPermission = (user, permission) => {
  switch (permission) {
    case "manage_employees": return canManageEmployees(user);
    case "view_analytics":   return canViewAnalytics(user);
    case "admin_panel":      return canAccessAdminPanel(user);
    case "delete_employee":  return canDeleteEmployee(user);
    default:                 return false;
  }
};

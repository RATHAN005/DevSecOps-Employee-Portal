import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Layout
import MainLayout from "../components/layout/MainLayout";

// Guards
import ProtectedRoute from "../components/auth/ProtectedRoute";
import AdminRoute from "../components/auth/AdminRoute";

// Auth
import Login from "../pages/auth/Login";

// Dashboard
import Dashboard from "../pages/dashboard/Dashboard";

// Employees
import Employees       from "../pages/employees/Employees";
import EmployeeDetails from "../pages/employees/EmployeeDetails";
import AddEmployee     from "../pages/employees/AddEmployee";

// Profile
import Profile from "../pages/profile/Profile";

// Admin
import Settings       from "../pages/admin/Settings";
import AuditLogs      from "../pages/admin/AuditLogs";
import UserManagement from "../pages/admin/UserManagement";
import SystemHealth   from "../pages/admin/SystemHealth";

// Analytics
import Analytics from "../pages/analytics/Analytics";

// Errors
import NotFound    from "../pages/errors/NotFound";
import Unauthorized from "../pages/errors/Unauthorized";

/**
 * AppRoutes — central route configuration
 */
const AppRoutes = () => (
  <Routes>
    {/* Public */}
    <Route path="/" element={<Login />} />
    <Route path="/unauthorized" element={<Unauthorized />} />

    {/* Protected shell — all authenticated pages live inside MainLayout */}
    <Route
      path="/"
      element={
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      }
    >
      <Route path="dashboard"           element={<Dashboard />} />
      <Route path="employees"           element={<Employees />} />
      <Route path="employees/add"       element={<AddEmployee />} />
      <Route path="employees/:id"       element={<EmployeeDetails />} />
      <Route path="profile"             element={<Profile />} />
      <Route path="analytics"           element={<Analytics />} />

      {/* Admin routes */}
      <Route path="admin/settings"      element={<AdminRoute><Settings /></AdminRoute>} />
      <Route path="admin/audit-logs"    element={<AdminRoute><AuditLogs /></AdminRoute>} />
      <Route path="admin/users"         element={<AdminRoute><UserManagement /></AdminRoute>} />
      <Route path="admin/system-health" element={<AdminRoute><SystemHealth /></AdminRoute>} />
    </Route>

    {/* 404 */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;

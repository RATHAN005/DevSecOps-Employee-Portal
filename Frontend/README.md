# DevSecOps Employee Portal — Frontend

## Tech Stack
- **React 19** + **Vite 8**
- **React Router v7** for routing
- **Axios** for API communication
- **Tailwind CSS** for utility-first styling
- Vanilla CSS for global resets and theming

## Folder Structure

```
src/
├── assets/              Static images and icons
├── components/
│   ├── common/          Button, Input, Select, Modal, Loader, Skeleton, Pagination, SearchBar, EmptyState
│   ├── layout/          Sidebar, Navbar, Footer, MainLayout
│   ├── dashboard/       StatCard, AttendanceChart, EmployeeGrowthChart, LeaveChart, DepartmentChart, RecentActivity
│   ├── employee/        EmployeeTable, EmployeeCard, EmployeeModal, EmployeeDetails, DeleteEmployeeModal, EmployeeFilters
│   ├── profile/         ProfileCard, ProfileForm, ChangePassword
│   └── auth/            ProtectedRoute, AdminRoute, LoginForm
├── pages/
│   ├── auth/            Login
│   ├── dashboard/       Dashboard
│   ├── employees/       Employees, EmployeeDetails, AddEmployee
│   ├── profile/         Profile
│   ├── admin/           Settings, AuditLogs, UserManagement, SystemHealth
│   ├── analytics/       Analytics
│   └── errors/          NotFound, Unauthorized
├── context/             AuthContext, ThemeContext, NotificationContext
├── hooks/               useAuth, useTheme, usePagination, useDebounce, useEmployees
├── services/            api, authService, employeeService, dashboardService, analyticsService
├── utils/               constants, validators, dateUtils, formatters, permissions
├── routes/              AppRoutes.jsx
└── styles/              globals.css, darkTheme.css, components.css
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Environment Variables

Copy `.env` and fill in your values:

| Variable           | Description               |
|--------------------|---------------------------|
| `VITE_API_BASE_URL`| Backend API base URL      |

## Role-Based Access
| Role     | Dashboard | Employees | Analytics | Admin Panel |
|----------|-----------|-----------|-----------|-------------|
| admin    | ✅         | ✅ (CRUD)  | ✅         | ✅           |
| manager  | ✅         | ✅ (CRUD)  | ✅         | ❌           |
| employee | ✅         | 👁 (read)  | ❌         | ❌           |

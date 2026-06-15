import React from "react";
import StatCard from "../../components/dashboard/StatCard";
import AttendanceChart from "../../components/dashboard/AttendanceChart";
import EmployeeGrowthChart from "../../components/dashboard/EmployeeGrowthChart";
import LeaveChart from "../../components/dashboard/LeaveChart";
import DepartmentChart from "../../components/dashboard/DepartmentChart";
import RecentActivity from "../../components/dashboard/RecentActivity";

const STATS = [
  { title: "Total Employees", value: "248", subtitle: "+12 this month", color: "indigo" },
  { title: "Active Today",    value: "214", subtitle: "86% attendance",  color: "green"  },
  { title: "On Leave",        value: "18",  subtitle: "7 pending approvals", color: "yellow" },
  { title: "New Hires",       value: "6",   subtitle: "This month",      color: "red"    },
];

const ATTENDANCE_DATA = [
  { label: "Mon", value: 90 }, { label: "Tue", value: 85 }, { label: "Wed", value: 88 },
  { label: "Thu", value: 92 }, { label: "Fri", value: 78 }, { label: "Sat", value: 40 },
];

const GROWTH_DATA = [
  { label: "Jan", value: 200 }, { label: "Feb", value: 210 }, { label: "Mar", value: 215 },
  { label: "Apr", value: 220 }, { label: "May", value: 235 }, { label: "Jun", value: 248 },
];

const LEAVE_DATA = [
  { label: "Annual",  value: 8,  pct: 70 },
  { label: "Sick",    value: 5,  pct: 45 },
  { label: "Unpaid",  value: 3,  pct: 25 },
  { label: "Special", value: 2,  pct: 15 },
];

const DEPT_DATA = [
  { name: "Engineering",      count: 80 },
  { name: "Marketing",        count: 45 },
  { name: "Design",           count: 30 },
  { name: "HR",               count: 25 },
  { name: "Finance",          count: 40 },
  { name: "Operations",       count: 28 },
];

const ACTIVITIES = [
  { id: 1, user: "Alice Johnson", action: "was added to Engineering dept.", time: "2 min ago",  type: "added"   },
  { id: 2, user: "Bob Smith",     action: "updated their profile.",          time: "15 min ago", type: "updated" },
  { id: 3, user: "Carol White",   action: "was removed from the system.",    time: "1 hr ago",   type: "deleted" },
  { id: 4, user: "Dan Brown",     action: "applied for annual leave.",       time: "2 hrs ago",  type: "updated" },
];

/**
 * Dashboard page
 */
const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {STATS.map((s) => (
          <StatCard key={s.title} {...s} />
        ))}
      </div>

      {/* Charts row 1 */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <AttendanceChart data={ATTENDANCE_DATA} />
        <EmployeeGrowthChart data={GROWTH_DATA} />
      </div>

      {/* Charts row 2 + activity */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <LeaveChart data={LEAVE_DATA} />
        <DepartmentChart data={DEPT_DATA} />
        <RecentActivity activities={ACTIVITIES} />
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import StatCard from "../../components/dashboard/StatCard";
import AttendanceChart from "../../components/dashboard/AttendanceChart";
import EmployeeGrowthChart from "../../components/dashboard/EmployeeGrowthChart";
import DepartmentChart from "../../components/dashboard/DepartmentChart";

const ATTENDANCE_DATA = [
  { label: "Jan", value: 88 }, { label: "Feb", value: 82 }, { label: "Mar", value: 90 },
  { label: "Apr", value: 86 }, { label: "May", value: 92 }, { label: "Jun", value: 85 },
];

const GROWTH_DATA = [
  { label: "Q1 '24", value: 190 }, { label: "Q2 '24", value: 205 },
  { label: "Q3 '24", value: 218 }, { label: "Q4 '24", value: 235 },
  { label: "Q1 '25", value: 242 }, { label: "Q2 '25", value: 248 },
];

const DEPT_DATA = [
  { name: "Engineering",  count: 80 },
  { name: "Marketing",    count: 45 },
  { name: "Design",       count: 30 },
  { name: "HR",           count: 25 },
  { name: "Finance",      count: 40 },
  { name: "Operations",   count: 28 },
];

const KPIS = [
  { title: "Retention Rate",    value: "94%",  subtitle: "+2% vs last year",  color: "green"  },
  { title: "Avg. Tenure",       value: "2.4y", subtitle: "Across all depts",  color: "indigo" },
  { title: "Turnover Rate",     value: "6%",   subtitle: "-1% vs last year",  color: "yellow" },
  { title: "Open Positions",    value: "12",   subtitle: "Actively hiring",    color: "red"    },
];

/**
 * Analytics page
 */
const Analytics = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Workforce insights and trends
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {KPIS.map((k) => <StatCard key={k.title} {...k} />)}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <AttendanceChart data={ATTENDANCE_DATA} />
        <EmployeeGrowthChart data={GROWTH_DATA} />
      </div>

      <DepartmentChart data={DEPT_DATA} />
    </div>
  );
};

export default Analytics;

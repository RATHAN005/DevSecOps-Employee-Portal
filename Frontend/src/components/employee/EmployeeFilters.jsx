import React from "react";
import SearchBar from "../common/SearchBar";
import Select from "../common/Select";

const DEPARTMENT_OPTIONS = [
  { value: "", label: "All Departments" },
  { value: "engineering",  label: "Engineering" },
  { value: "design",       label: "Design" },
  { value: "marketing",    label: "Marketing" },
  { value: "hr",           label: "Human Resources" },
  { value: "finance",      label: "Finance" },
  { value: "operations",   label: "Operations" },
];

const STATUS_OPTIONS = [
  { value: "",           label: "All Statuses" },
  { value: "active",     label: "Active" },
  { value: "inactive",   label: "Inactive" },
  { value: "terminated", label: "Terminated" },
];

/**
 * EmployeeFilters — search + department + status filter bar
 * @param {object} props
 * @param {object} props.filters - { search, department, status }
 * @param {function} props.onChange - (patch: object) => void
 */
const EmployeeFilters = ({ filters = {}, onChange }) => {
  const { search = "", department = "", status = "" } = filters;

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
      <SearchBar
        value={search}
        onChange={(val) => onChange?.({ search: val })}
        placeholder="Search employees..."
        className="flex-1"
      />
      <Select
        id="filter-department"
        label="Department"
        options={DEPARTMENT_OPTIONS}
        value={department}
        onChange={(e) => onChange?.({ department: e.target.value })}
        className="w-full sm:w-48"
      />
      <Select
        id="filter-status"
        label="Status"
        options={STATUS_OPTIONS}
        value={status}
        onChange={(e) => onChange?.({ status: e.target.value })}
        className="w-full sm:w-40"
      />
    </div>
  );
};

export default EmployeeFilters;

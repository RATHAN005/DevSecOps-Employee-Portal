import {
  useEffect,
  useState,
} from "react";

import api from "../services/api";

import MainLayout from "../layouts/MainLayout";

import EmployeeTable from "../components/EmployeeTable";

function Employees() {
  const [employees, setEmployees] =
    useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees =
    async () => {
      const response =
        await api.get("/employees");

      setEmployees(
        response.data
      );
    };

  return (
    <MainLayout>

      <div className="flex justify-between mb-5">

        <h1 className="text-2xl font-bold">
          Employees
        </h1>

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Add Employee
        </button>

      </div>

      <EmployeeTable
        employees={employees}
      />

    </MainLayout>
  );
}

export default Employees;
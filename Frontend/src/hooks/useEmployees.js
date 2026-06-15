import { useState, useEffect, useCallback } from "react";
import employeeService from "../services/employeeService";

/**
 * useEmployees — CRUD operations for employee data
 */
const useEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState(null);

  const fetchEmployees = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await employeeService.getAll();
      setEmployees(data);
    } catch (err) {
      setError(err?.message ?? "Failed to load employees.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchEmployees(); }, [fetchEmployees]);

  const addEmployee = async (data) => {
    const created = await employeeService.create(data);
    setEmployees((prev) => [created, ...prev]);
    return created;
  };

  const updateEmployee = async (id, data) => {
    const updated = await employeeService.update(id, data);
    setEmployees((prev) => prev.map((e) => (e.id === id ? updated : e)));
    return updated;
  };

  const deleteEmployee = async (id) => {
    await employeeService.remove(id);
    setEmployees((prev) => prev.filter((e) => e.id !== id));
  };

  return { employees, loading, error, fetchEmployees, addEmployee, updateEmployee, deleteEmployee };
};

export { useEmployees };
export default useEmployees;

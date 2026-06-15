import React, { useState } from "react";
import EmployeeTable from "../../components/employee/EmployeeTable";
import EmployeeFilters from "../../components/employee/EmployeeFilters";
import EmployeeModal from "../../components/employee/EmployeeModal";
import DeleteEmployeeModal from "../../components/employee/DeleteEmployeeModal";
import Button from "../../components/common/Button";
import Pagination from "../../components/common/Pagination";
import { useEmployees } from "../../hooks/useEmployees";

/**
 * Employees list page
 */
const Employees = () => {
  const { employees, loading, addEmployee, updateEmployee, deleteEmployee } = useEmployees();

  const [filters, setFilters] = useState({ search: "", department: "", status: "" });
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 10;

  // Client-side filter
  const filtered = employees.filter((e) => {
    const q = filters.search.toLowerCase();
    const matchSearch = !q || e.name?.toLowerCase().includes(q) || e.email?.toLowerCase().includes(q);
    const matchDept   = !filters.department || e.department === filters.department;
    const matchStatus = !filters.status     || e.status     === filters.status;
    return matchSearch && matchDept && matchStatus;
  });

  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleFilterChange = (patch) => {
    setFilters((f) => ({ ...f, ...patch }));
    setPage(1);
  };

  const handleEdit = (emp) => { setSelectedEmployee(emp); setModalOpen(true); };
  const handleDelete = (emp) => { setSelectedEmployee(emp); setDeleteModalOpen(true); };
  const handleModalClose = () => { setModalOpen(false); setSelectedEmployee(null); };
  const handleDeleteClose = () => { setDeleteModalOpen(false); setSelectedEmployee(null); };

  const handleSubmit = async (data) => {
    if (selectedEmployee) await updateEmployee(selectedEmployee.id, data);
    else await addEmployee(data);
    handleModalClose();
  };

  const handleConfirmDelete = async (emp) => {
    await deleteEmployee(emp.id);
    handleDeleteClose();
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Employees</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {filtered.length} employee{filtered.length !== 1 ? "s" : ""} found
          </p>
        </div>
        <Button id="add-employee-btn" onClick={() => { setSelectedEmployee(null); setModalOpen(true); }}>
          + Add Employee
        </Button>
      </div>

      {/* Filters */}
      <EmployeeFilters filters={filters} onChange={handleFilterChange} />

      {/* Table */}
      <EmployeeTable
        employees={paginated}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Pagination */}
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(filtered.length / PAGE_SIZE)}
        onPageChange={setPage}
      />

      {/* Modals */}
      <EmployeeModal
        isOpen={modalOpen}
        onClose={handleModalClose}
        employee={selectedEmployee}
        onSubmit={handleSubmit}
      />
      <DeleteEmployeeModal
        isOpen={deleteModalOpen}
        onClose={handleDeleteClose}
        employee={selectedEmployee}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default Employees;

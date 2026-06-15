import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import EmployeeDetailsComponent from "../../components/employee/EmployeeDetails";
import EmployeeModal from "../../components/employee/EmployeeModal";

/**
 * EmployeeDetails page — shows full profile for a single employee
 */
const EmployeeDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editOpen, setEditOpen] = React.useState(false);

  // TODO: fetch employee by `id` from API via useEmployees or employeeService
  const employee = null; // placeholder

  return (
    <div className="flex flex-col gap-6">
      <EmployeeDetailsComponent
        employee={employee}
        onBack={() => navigate(-1)}
        onEdit={() => setEditOpen(true)}
      />
      <EmployeeModal
        isOpen={editOpen}
        onClose={() => setEditOpen(false)}
        employee={employee}
        onSubmit={(data) => {
          // TODO: call updateEmployee
          setEditOpen(false);
        }}
      />
    </div>
  );
};

export default EmployeeDetailsPage;

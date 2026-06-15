import React from "react";
import { useNavigate } from "react-router-dom";
import EmployeeModal from "../../components/employee/EmployeeModal";

/**
 * AddEmployee page — standalone page to add a new employee
 */
const AddEmployee = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      // TODO: call addEmployee from service/hook
      console.log("Adding employee:", data);
      navigate("/employees");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Add Employee</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">Fill in the details to add a new employee.</p>
      </div>
      {/* Inline form instead of modal */}
      <EmployeeModal
        isOpen={true}
        onClose={() => navigate(-1)}
        employee={null}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </div>
  );
};

export default AddEmployee;

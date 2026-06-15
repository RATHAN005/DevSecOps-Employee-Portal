import React from "react";
import Modal from "../common/Modal";
import Input from "../common/Input";
import Select from "../common/Select";
import Button from "../common/Button";

const DEPARTMENT_OPTIONS = [
  { value: "engineering",  label: "Engineering" },
  { value: "design",       label: "Design" },
  { value: "marketing",    label: "Marketing" },
  { value: "hr",           label: "Human Resources" },
  { value: "finance",      label: "Finance" },
  { value: "operations",   label: "Operations" },
];

const STATUS_OPTIONS = [
  { value: "active",     label: "Active" },
  { value: "inactive",   label: "Inactive" },
  { value: "terminated", label: "Terminated" },
];

/**
 * EmployeeModal — Add / Edit employee form
 * @param {object} props
 * @param {boolean} props.isOpen
 * @param {function} props.onClose
 * @param {object|null} props.employee - null for add, object for edit
 * @param {function} props.onSubmit - (formData) => void
 * @param {boolean} props.loading
 */
const EmployeeModal = ({ isOpen, onClose, employee = null, onSubmit, loading = false }) => {
  const isEdit = !!employee;

  const [form, setForm] = React.useState({
    name:       employee?.name       ?? "",
    email:      employee?.email      ?? "",
    position:   employee?.position   ?? "",
    department: employee?.department ?? "",
    status:     employee?.status     ?? "active",
    phone:      employee?.phone      ?? "",
  });

  React.useEffect(() => {
    if (employee) {
      setForm({
        name:       employee.name       ?? "",
        email:      employee.email      ?? "",
        position:   employee.position   ?? "",
        department: employee.department ?? "",
        status:     employee.status     ?? "active",
        phone:      employee.phone      ?? "",
      });
    } else {
      setForm({ name: "", email: "", position: "", department: "", status: "active", phone: "" });
    }
  }, [employee]);

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(form);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={isEdit ? "Edit Employee" : "Add Employee"} size="lg">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input id="emp-name"       label="Full Name"   required value={form.name}       onChange={handleChange("name")}       placeholder="Jane Doe" />
          <Input id="emp-email"      label="Email"       required type="email" value={form.email} onChange={handleChange("email")} placeholder="jane@example.com" />
          <Input id="emp-position"   label="Position"    required value={form.position}   onChange={handleChange("position")}   placeholder="Software Engineer" />
          <Input id="emp-phone"      label="Phone"                value={form.phone}      onChange={handleChange("phone")}      placeholder="+1 555 000 0000" />
          <Select id="emp-department" label="Department" required options={DEPARTMENT_OPTIONS} value={form.department} onChange={handleChange("department")} />
          <Select id="emp-status"    label="Status"      required options={STATUS_OPTIONS}     value={form.status}     onChange={handleChange("status")} />
        </div>
        <div className="flex justify-end gap-3 pt-2">
          <Button type="button" variant="secondary" onClick={onClose}>Cancel</Button>
          <Button type="submit" loading={loading}>{isEdit ? "Save Changes" : "Add Employee"}</Button>
        </div>
      </form>
    </Modal>
  );
};

export default EmployeeModal;

import React, { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

/**
 * ChangePassword — form to update password
 * @param {object} props
 * @param {function} props.onSubmit - ({ currentPassword, newPassword }) => void
 * @param {boolean} props.loading
 */
const ChangePassword = ({ onSubmit, loading = false }) => {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword:     "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (form.newPassword !== form.confirmPassword) {
      setError("New passwords do not match.");
      return;
    }
    if (form.newPassword.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    onSubmit?.({ currentPassword: form.currentPassword, newPassword: form.newPassword });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
    >
      <h3 className="mb-4 text-base font-semibold text-gray-800 dark:text-white">
        Change Password
      </h3>
      <div className="flex flex-col gap-4 max-w-md">
        <Input id="current-password" label="Current Password" type="password" required value={form.currentPassword} onChange={handleChange("currentPassword")} />
        <Input id="new-password"     label="New Password"     type="password" required value={form.newPassword}     onChange={handleChange("newPassword")} helperText="Minimum 8 characters" />
        <Input id="confirm-password" label="Confirm Password" type="password" required value={form.confirmPassword} onChange={handleChange("confirmPassword")} error={error} />
      </div>
      <div className="mt-4 flex justify-end">
        <Button type="submit" loading={loading}>Update Password</Button>
      </div>
    </form>
  );
};

export default ChangePassword;

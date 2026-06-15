import React from "react";
import Input from "../common/Input";
import Button from "../common/Button";

/**
 * ProfileForm — edit basic profile details
 * @param {object} props
 * @param {object} props.user
 * @param {function} props.onSubmit - (data) => void
 * @param {boolean} props.loading
 */
const ProfileForm = ({ user, onSubmit, loading = false }) => {
  const [form, setForm] = React.useState({
    name:  user?.name  ?? "",
    email: user?.email ?? "",
    phone: user?.phone ?? "",
  });

  React.useEffect(() => {
    if (user) setForm({ name: user.name ?? "", email: user.email ?? "", phone: user.phone ?? "" });
  }, [user]);

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
    >
      <h3 className="mb-4 text-base font-semibold text-gray-800 dark:text-white">
        Personal Information
      </h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input id="profile-name"  label="Full Name" required value={form.name}  onChange={handleChange("name")}  placeholder="Jane Doe" />
        <Input id="profile-email" label="Email"     required type="email" value={form.email} onChange={handleChange("email")} placeholder="jane@example.com" />
        <Input id="profile-phone" label="Phone"              value={form.phone} onChange={handleChange("phone")} placeholder="+1 555 000 0000" />
      </div>
      <div className="mt-4 flex justify-end">
        <Button type="submit" loading={loading}>Save Changes</Button>
      </div>
    </form>
  );
};

export default ProfileForm;

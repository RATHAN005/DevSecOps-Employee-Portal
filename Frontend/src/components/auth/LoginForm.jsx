import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Input from "../common/Input";
import Button from "../common/Button";

/**
 * LoginForm — handles credential input and login submission
 * @param {object} props
 * @param {function} props.onSuccess - Called after successful login
 */
const LoginForm = ({ onSuccess }) => {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(form.email, form.password);
      onSuccess?.();
    } catch (err) {
      // err is the response data object from the interceptor
      setError(err?.message || "Login failed. Check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {error && (
        <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400">
          {error}
        </div>
      )}
      <Input
        id="login-email"
        label="Email"
        type="email"
        required
        value={form.email}
        onChange={handleChange("email")}
        placeholder="admin@portal.com"
        autoComplete="email"
      />
      <Input
        id="login-password"
        label="Password"
        type="password"
        required
        value={form.password}
        onChange={handleChange("password")}
        placeholder="••••••••"
        autoComplete="current-password"
      />
      <Button type="submit" loading={loading} size="lg" className="w-full mt-1">
        Sign In
      </Button>
      <p className="text-center text-xs text-gray-400 mt-1">
        Demo: <span className="font-mono">admin@portal.com</span> / <span className="font-mono">Admin@123</span>
      </p>
    </form>
  );
};

export default LoginForm;

import React, { useState } from "react";

export function Register({ onRegister }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    // ✅ Client-side validation
    if (!formData.email) {
      setError("Please enter an email");
      return;
    }
    if (!formData.password) {
      setError("Please enter a password");
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      if (response.status === 409) {
        throw new Error("This email is already registered.");
      }
      if (!response.ok) {
        throw new Error("Registration failed");
      }

      // ✅ Show success message instead of auto-login
      setSuccess(true);
      setFormData({ email: "", password: "" }); // clear form
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>

      {/* ✅ Messages */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Registration successful! Please log in.</p>}
    </div>
  );
}

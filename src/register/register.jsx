import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Register() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        const response = await fetch("BACKEND API DOMAIN", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            setSuccess("Account created! Redirecting to login...");
            setTimeout(() => navigate("/"), 1500);
        } else {
            const msg = await response.text();
            setError(msg || "Registration failed");
        }
    };

    return (
        <div className="container mt-5 text-center">
          <h2>Create an Account</h2>
    
          <form className="d-flex flex-column align-items-center gap-3 mt-3" onSubmit={handleRegister}>
            <input
              type="email"
              className="form-control w-50"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
    
            <input
              type="password"
              className="form-control w-50"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
    
            <button type="submit" className="btn btn-primary w-25 mt-2">
              Register
            </button>
    
            {error && <p className="text-danger">{error}</p>}
            {success && <p className="text-success">{success}</p>}
          </form>
        </div>
      );
};

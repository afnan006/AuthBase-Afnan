import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({ usernameOrEmail: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token); // Save token for authentication
        navigate("/dashboard");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Username/Email</label>
          <input
            type="text"
            value={formData.usernameOrEmail}
            onChange={(e) =>
              setFormData({ ...formData, usernameOrEmail: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-lg hover:bg-opacity-90 transition duration-300 shadow-3d"
        >
          Login
        </button>
      </form>
      <div className="mt-4 text-center">
        <Link to="/signup" className="text-primary hover:underline">
          Sign Up
        </Link>
        <span className="mx-2">|</span>
        <Link to="/forgot-password" className="text-primary hover:underline">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
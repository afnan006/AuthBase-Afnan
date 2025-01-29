import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../api";

const LoginPage = () => {
  const [formData, setFormData] = useState({ usernameOrEmail: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}login/`, formData);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token); // Save token for authentication
        navigate("/dashboard");
      }
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username or Email"
          value={formData.usernameOrEmail}
          onChange={(e) => setFormData({ ...formData, usernameOrEmail: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        <button type="submit">Login</button>
      </form>
      <div>
        <Link to="/signup" className="button">
          Sign Up
        </Link>{" "}
        |{" "}
        <Link to="/forgot-password" className="button">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
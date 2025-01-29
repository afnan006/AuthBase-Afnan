import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../api";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password1 !== formData.password2) {
      setError("Passwords do not match.");
      return;
    }
    try {
      const response = await axios.post(`${API_BASE_URL}signup/`, formData);
      if (response.status === 201) {
        navigate("/login");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password1}
          onChange={(e) => setFormData({ ...formData, password1: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={formData.password2}
          onChange={(e) => setFormData({ ...formData, password2: e.target.value })}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <div>
        <Link to="/login" className="button">
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;
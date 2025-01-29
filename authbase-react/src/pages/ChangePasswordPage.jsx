import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ChangePasswordPage = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      setError("New passwords do not match.");
      return;
    }
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("You must be logged in to change your password.");
        return;
      }
      const response = await fetch("http://127.0.0.1:8000/change-password/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSuccess(true);
        setError("");
        setTimeout(() => navigate("/dashboard"), 2000);
      } else {
        setError("Incorrect old password or invalid new password.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container">
      <h2>Change Password</h2>
      {success && <div className="alert alert-success">Password changed successfully! Redirecting...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Old Password"
            value={formData.oldPassword}
            onChange={(e) =>
              setFormData({ ...formData, oldPassword: e.target.value })
            }
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="New Password"
            value={formData.newPassword}
            onChange={(e) =>
              setFormData({ ...formData, newPassword: e.target.value })
            }
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Confirm New Password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Change Password
        </button>
      </form>
      <div className="mt-3">
        <Link to="/dashboard">Back to Dashboard</Link>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
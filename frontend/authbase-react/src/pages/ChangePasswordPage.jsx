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
        setTimeout(() => navigate("/dashboard"), 2000); // Redirect after 2 seconds
      } else {
        setError("Incorrect old password or invalid new password.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h1 className="text-2xl font-bold text-center mb-6">Change Password</h1>
      {success && <p className="text-green-500 text-center">Password changed successfully! Redirecting...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Old Password</label>
          <input
            type="password"
            value={formData.oldPassword}
            onChange={(e) =>
              setFormData({ ...formData, oldPassword: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">New Password</label>
          <input
            type="password"
            value={formData.newPassword}
            onChange={(e) =>
              setFormData({ ...formData, newPassword: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Confirm New Password</label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-lg hover:bg-opacity-90 transition duration-300 shadow-3d"
        >
          Change Password
        </button>
      </form>
      <div className="mt-4 text-center">
        <Link to="/dashboard" className="text-primary hover:underline">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
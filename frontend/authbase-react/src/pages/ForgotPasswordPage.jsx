import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/forgot-password/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setMessage("Password reset link sent to your email.");
      } else {
        setMessage("Email not found.");
      }
    } catch (err) {
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h1 className="text-2xl font-bold text-center mb-6">Forgot Password</h1>
      {message && <p className="text-center">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-lg hover:bg-opacity-90 transition duration-300 shadow-3d"
        >
          Send Reset Link
        </button>
      </form>
      <div className="mt-4 text-center">
        <Link to="/login" className="text-primary hover:underline">
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
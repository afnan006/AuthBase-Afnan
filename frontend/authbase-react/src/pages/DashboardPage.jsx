import React from "react";
import { Link, useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h1 className="text-2xl font-bold text-center mb-6">Hi, Username!</h1>
      <div className="space-y-4">
        <Link
          to="/profile"
          className="block w-full bg-primary text-white py-2 rounded-lg text-center hover:bg-opacity-90 transition duration-300 shadow-3d"
        >
          Profile
        </Link>
        <Link
          to="/change-password"
          className="block w-full bg-primary text-white py-2 rounded-lg text-center hover:bg-opacity-90 transition duration-300 shadow-3d"
        >
          Change Password
        </Link>
        <button
          onClick={handleLogout}
          className="w-full bg-secondary text-white py-2 rounded-lg hover:bg-opacity-90 transition duration-300 shadow-3d"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
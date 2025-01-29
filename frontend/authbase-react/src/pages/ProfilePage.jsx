import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  // Simulated user data (replace this with API call to fetch user details)
  const user = {
    username: "JohnDoe",
    email: "johndoe@example.com",
    dateJoined: "2023-01-01",
    lastUpdated: "2023-01-15",
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h1 className="text-2xl font-bold text-center mb-6">Profile</h1>
      <div className="space-y-4">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Date Joined:</strong> {user.dateJoined}</p>
        <p><strong>Last Updated:</strong> {user.lastUpdated}</p>
        <Link
          to="/dashboard"
          className="block w-full bg-primary text-white py-2 rounded-lg text-center hover:bg-opacity-90 transition duration-300 shadow-3d"
        >
          Back to Dashboard
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

export default ProfilePage;
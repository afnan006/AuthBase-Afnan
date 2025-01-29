import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

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
    <div className="container">
      <h2>Profile</h2>
      <div className="card mt-3">
        <div className="card-body">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Date Joined:</strong> {user.dateJoined}</p>
          <p><strong>Last Updated:</strong> {user.lastUpdated}</p>
        </div>
      </div>
      <div className="mt-3">
        <Link to="/dashboard" className="btn btn-secondary me-2">
          Back to Dashboard
        </Link>
        <button onClick={handleLogout} className="btn btn-danger">
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
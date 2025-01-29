import React from "react";
import { Link, useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="container dashboard">
      <h2>Hi, Username!</h2>
      <div>
        <Link to="/profile" className="button">
          Profile
        </Link>
        <Link to="/change-password" className="button">
          Change Password
        </Link>
        <button onClick={handleLogout} className="button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";
// import ForgotPasswordPage from "./pages/ForgotPasswordPage";
// import DashboardPage from "./pages/DashboardPage";
// import ProfilePage from "./pages/ProfilePage";
// import ChangePasswordPage from "./pages/ChangePasswordPage";

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <Routes>
//           <Route path="/" element={<LoginPage />} />
//           <Route path="/signup" element={<SignupPage />} />
//           <Route path="/forgot-password" element={<ForgotPasswordPage />} />
//           <Route path="/dashboard" element={<DashboardPage />} />
//           <Route path="/profile" element={<ProfilePage />} />
//           <Route path="/change-password" element={<ChangePasswordPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from "react";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-primary mb-4">
          Welcome to AuthBase
        </h1>
        <p className="text-center text-gray-600">
          This is a test page to verify Tailwind CSS.
        </p>
        <button className="mt-4 w-full bg-primary text-white py-2 rounded-lg hover:bg-opacity-90 transition duration-300 shadow-3d">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
import React from "react";

import { Routes, Route } from "react-router-dom";

// components
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const RouteIndex = () => {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Dashboard />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default RouteIndex;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Signin from "./screens/Signin";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./screens/Dashboard";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Signin />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;

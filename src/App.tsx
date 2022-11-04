import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Signin from "./screens/Signin";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index={true} path="signin" element={<Signin />} />
    </Routes>
  );
}

export default App;

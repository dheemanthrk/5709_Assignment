import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Dashboard from "./views/dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

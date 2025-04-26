// src/App.js
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import ResearchPage from "./pages/ResearchPage/ResearchPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {" "}
          <Route index element={<HomePage />} /> {/* Default page at '/' */}
          <Route path="research" element={<ResearchPage />} />
          <Route
            path="*"
            element={
              <div>
                <h2>404 Not Found</h2>
                <p>Oops! This page doesn't exist.</p>
              </div>
            }
          />{" "}
          {/* Basic 404 */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

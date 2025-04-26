// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import ResearchPage from "./pages/ResearchPage/ResearchPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {" "}
          {/* Layout wraps the pages */}
          <Route index element={<HomePage />} /> {/* Default page at '/' */}
          <Route path="research" element={<ResearchPage />} />
          {/* Add other routes/pages here if needed */}
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

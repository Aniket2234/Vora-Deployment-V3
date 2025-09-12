import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { VESHomePage } from "./screens/VESHomePage";
import { VESServicePage } from "./screens/VESServicePage";
import { VESContactPage } from "./screens/VESContactPage";
import { VESAboutPage } from "./screens/VESAboutPage";
import { VESProject } from "./screens/VESProject";

export const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VESHomePage />} />
        <Route path="/services" element={<VESServicePage />} />
        <Route path="/contact" element={<VESContactPage />} />
        <Route path="/about" element={<VESAboutPage />} />
        <Route path="/project" element={<VESProject />} />
      </Routes>
    </Router>
  );
};
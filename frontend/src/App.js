import React from "react";
import "@/App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Landing from "@/pages/Landing";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import Profile from "@/pages/Profile";
import Contact from "@/pages/Contact";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Toaster />
    </HashRouter>
  );
}

export default App;

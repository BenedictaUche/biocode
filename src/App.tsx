import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import "./App.css";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { Sidebar } from "./components/ui/sidebar";
import Result from "./pages/result";

function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<DashboardLayout children={children} />}>
            <Route path="/" element={<SidebarProvider children={children} />} />
            <Route path="/result" element={<Result />} />
          </Route>
        </Routes>
      </Router>
      {/* <SidebarProvider>
        <Sidebar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider> */}
    </>
  );
}

export default App;

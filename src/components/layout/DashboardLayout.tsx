import React from "react";
import { Outlet } from "react-router-dom";
// import Header from './Header';
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "../app-sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <div className="min-h-screen bg-[#f6f8fb]">
    //   <Header />
    //   <main className="sm:p-6 p-1 pt-20 sm:pt-40">
    //     <Outlet />
    //   </main>
    // </div>
    // <SidebarProvider>
    <>
      <AppSidebar />
      <SidebarTrigger className="" />
      <main className="w-full">
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;

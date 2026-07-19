import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">

      {/* Mobile Overlay */}

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Right Section */}

      <div className="flex flex-col flex-1 overflow-hidden">

        {/* Header */}

        <Header
          setSidebarOpen={setSidebarOpen}
        />

        {/* Page Content */}

        <main className="flex-1 overflow-y-auto bg-gray-50">
          <Outlet />
        </main>

        {/* Footer */}

        <Footer />

      </div>

    </div>
  );
}
import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-grow p-4 md:p-8 overflow-auto">
        <Outlet />  {/* Render the current section (Overview, Music, etc.) */}
      </div>
    </div>
  );
};

export default Dashboard;

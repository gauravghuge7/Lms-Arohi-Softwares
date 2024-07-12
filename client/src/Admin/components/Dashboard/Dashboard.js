// /components/Dashboard/Dashboard.js
import React from 'react';
import DashboardCard from './DashboardCard';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto rounded-lg shadow-md p-6 bg-white">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">Admin Dashboard</h1>
        <div className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <DashboardCard title="Enrolled Students" number={1200} />
          <DashboardCard title="Number of Teachers" number={75} />
          <DashboardCard title="Number of Courses" number={45} />
          <DashboardCard title="Number of Classes" number={30} />
          <DashboardCard title="Number of Departments" number={10} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

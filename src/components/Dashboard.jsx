import React from 'react';
// Assuming you use React Router for navigation

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-teal-400 mb-6">    <i className="ri-user-smile-line text-2xl text-[#EEA8B3]"></i>Logistics Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Proof of Delivery Card */}
          <a href="/pod" className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-colors">
            <h2 className="text-xl font-semibold text-teal-400 mb-2">Proof of Delivery</h2>
            <p className="text-gray-300">Manage and confirm delivery details.</p>
          </a>

          {/* Transporter Details Card */}
          <a href="/transporter" className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-colors">
            <h2 className="text-xl font-semibold text-teal-400 mb-2">Transporter Details</h2>
            <p className="text-gray-300">Track transporter and driver information.</p>
          </a>

          {/* Goods Received Card */}
          <a href="/goods-received" className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-colors">
            <h2 className="text-xl font-semibold text-teal-400 mb-2">Goods Received</h2>
            <p className="text-gray-300">Record incoming and outgoing goods status.</p>
          </a>

          {/* Container Entry Plan Card */}
          <a href="/container-entry" className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-colors">
            <h2 className="text-xl font-semibold text-teal-400 mb-2">Container Entry Plan</h2>
            <p className="text-gray-300">View daily container activity reports.</p>
          </a>

          {/* Container Interchange Card */}
          <a href="/container-interchange" className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-colors">
            <h2 className="text-xl font-semibold text-teal-400 mb-2">Container Interchange</h2>
            <p className="text-gray-300">Handle container interchange details and descriptions.</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
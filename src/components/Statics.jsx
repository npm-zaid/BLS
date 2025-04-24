import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Statics = ({ theme }) => {
  // Chart data
  const chartData = {
    labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: 'DELHI - HEAD OFFICE',
        data: [10, 20, 30, 60, 40, 20],
        borderColor: 'rgba(0, 128, 0, 1)',
        backgroundColor: 'rgba(0, 128, 0, 0.2)',
        fill: true,
      },
      {
        label: 'MUMBAI',
        data: [5, 15, 25, 50, 30, 10],
        borderColor: 'rgba(255, 165, 0, 1)',
        backgroundColor: 'rgba(255, 165, 0, 0.2)',
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: false },
    },
    scales: {
      y: { beginAtZero: true, max: 80 },
    },
  };

  return (
    <div className="min-h-screen w-full   text-white p-6">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {[
            {
              label: 'Receivable',
              value: '₹19,78,82,763',
              change: '+10%',
              icon: 'ri-wallet-line',
              color: '#F97316', // Orange
              trend: 'up',
            },
            {
              label: 'Payable',
              value: '₹29,80,177',
              change: '-5%',
              icon: 'ri-bank-card-line',
              color: '#FACC15', // Yellow
              trend: 'down',
            },
            {
              label: 'Expense',
              value: '₹24,000',
              change: '+3%',
              icon: 'ri-money-dollar-circle-line',
              color: '#5EA9ED', // Dark Blue
              trend: 'up',
            },
            {
              label: 'Today Invoice',
              value: '0',
              change: '0%',
              icon: 'ri-file-list-3-line',
              color: '#0D9488', // Teal
              trend: 'neutral',
            },
            {
              label: 'LR',
              value: '1',
              change: '+1%',
              icon: 'ri-truck-line',
              color: '#FF0001', // Light Yellow
              trend: 'up',
            },
            {
              label: 'Today Cash Receipt',
              value: '20',
              change: '+8%',
              icon: 'ri-coins-line',
              color: '#6B21A8', // Purple
              trend: 'up',
            },
            {
              label: 'Today Bank Receipt',
              value: '30',
              change: '+12%',
              icon: 'ri-bank-line',
              color: '#DB2777', // Pink
              trend: 'up',
            },
          ].map((stat, index) => (
            <div
              key={index}
              className={`${theme ? 'bg-zinc-800/80' : 'bg-gray-100'} backdrop-blur-xl p-6 rounded-xl shadow-xl border-l-4 transition-all duration-300 hover:shadow-2xl hover:scale-105`}
              style={{ borderColor: stat.color }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-400 font-medium">{stat.label}</p>
                  <h3 className={`${theme ? 'text-white' : 'text-gray-900'} text-2xl font-bold mt-1`}>{stat.value}</h3>
                </div>
                <div className="p-3 bg-gradient-to-br rounded-full shadow-lg" style={{ background: `${stat.color}20` }}>
                  <i className={`${stat.icon} text-3xl`} style={{ color: stat.color }}></i>
                </div>
              </div>
              <p
                className={`text-xs mt-2 flex items-center gap-1 ${
                  stat.trend === 'up' ? 'text-green-400' : stat.trend === 'down' ? 'text-red-400' : 'text-gray-400'
                }`}
              >
                <i
                  className={
                    stat.trend === 'up'
                      ? 'ri-arrow-up-circle-fill'
                      : stat.trend === 'down'
                      ? 'ri-arrow-down-circle-fill'
                      : 'ri-checkbox-blank-circle-fill'
                  }
                  aria-label={stat.trend === 'up' ? 'Up trend' : stat.trend === 'down' ? 'Down trend' : 'No change'}
                ></i>
                {stat.change} from last month
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
          {/* Truck Reminder */}
          <div className={` ${theme ? 'bg-zinc-800/80 text-white' : 'bg-gray-100 text-gray-900'} p-4 rounded-lg `}>
            <h3 className="text-lg font-semibold text-teal-400 mb-2">Truck Reminder</h3>
            <p>AP 39 TR 9655</p>
            <p>Truck National Permit Reminder, 20-04-2025</p>
            <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
              More Info
            </button>
          </div>

          {/* Booking Analysis Chart */}
          <div className={` ${theme ? 'bg-zinc-800/80 text-white' : 'bg-gray-100 text-gray-900'} p-4 rounded-lg`}>
            <h3 className="text-lg font-semibold text-teal-400 mb-2">Booking Analysis</h3>
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statics;
import React from 'react';

const ChartTemp: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Temperature Chart</h2>
      <p className="text-gray-600">
        This is a placeholder for the temperature chart. In a real application, you would integrate a charting library like Chart.js or Recharts to display historical temperature data.
      </p>
    </div>
  );
};

export default ChartTemp;
import React from 'react';
import { ThermometerSun, Droplets, Clock } from 'lucide-react';

interface SensorData {
  temp: number;
  hum: number;
  date: string;
}

interface DashboardProps {
  sensorData: SensorData;
}

const Dashboard: React.FC<DashboardProps> = ({ sensorData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Temperature</h2>
          <ThermometerSun className="w-8 h-8 text-red-500" />
        </div>
        <p className="text-3xl font-bold text-gray-900">{sensorData.temp}°C</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Humidity</h2>
          <Droplets className="w-8 h-8 text-blue-500" />
        </div>
        <p className="text-3xl font-bold text-gray-900">{sensorData.hum}%</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Last Update</h2>
          <Clock className="w-8 h-8 text-green-500" />
        </div>
        <p className="text-xl font-medium text-gray-900">{sensorData.date}</p>
      </div>
    </div>
  );
};

export default Dashboard;
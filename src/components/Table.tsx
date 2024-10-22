import React from 'react';
import { Download } from 'lucide-react';

interface SensorData {
  temp: number;
  hum: number;
  date: string;
}

interface TableProps {
  sensorData: SensorData;
}

const Table: React.FC<TableProps> = ({ sensorData }) => {
  const handleDownloadCSV = () => {
    const csvContent = `Sensor,Temperature,Humidity,Date\nDHT11,${sensorData.temp},${sensorData.hum},${sensorData.date}`;
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'sensor_data.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sensor</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Temperature</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Humidity</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">DHT11</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{sensorData.temp}°C</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{sensorData.hum}%</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{sensorData.date}</td>
          </tr>
        </tbody>
      </table>
      <div className="px-6 py-4">
        <button
          onClick={handleDownloadCSV}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Download className="w-4 h-4 mr-2" />
          Download CSV
        </button>
      </div>
    </div>
  );
};

export default Table;
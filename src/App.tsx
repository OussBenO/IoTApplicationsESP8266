import React, { useState, useEffect } from 'react';
import { BarChart, Download, Droplets, Home, ThermometerSun } from 'lucide-react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Table from './components/Table';
import ChartTemp from './components/ChartTemp';
import ChartHum from './components/ChartHum';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sensorData, setSensorData] = useState({ temp: 0, hum: 0, date: '' });

  useEffect(() => {
    // Simulating data fetching
    const fetchData = () => {
      setSensorData({
        temp: Math.round(Math.random() * 30 + 10),
        hum: Math.round(Math.random() * 60 + 30),
        date: new Date().toLocaleString(),
      });
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { name: 'Dashboard', icon: Home, id: 'dashboard' },
    { name: 'Table', icon: BarChart, id: 'table' },
    { name: 'Chart Temp', icon: ThermometerSun, id: 'chartTemp' },
    { name: 'Chart Hum', icon: Droplets, id: 'chartHum' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard sensorData={sensorData} />;
      case 'table':
        return <Table sensorData={sensorData} />;
      case 'chartTemp':
        return <ChartTemp />;
      case 'chartHum':
        return <ChartHum />;
      default:
        return <Dashboard sensorData={sensorData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar navItems={navItems} activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
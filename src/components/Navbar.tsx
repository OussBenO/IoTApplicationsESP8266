import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavItem {
  name: string;
  icon: LucideIcon;
  id: string;
}

interface NavbarProps {
  navItems: NavItem[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ navItems, activeTab, setActiveTab }) => {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="font-bold text-xl">IoT Dashboard</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`${
                    activeTab === item.id
                      ? 'bg-indigo-700 text-white'
                      : 'text-indigo-200 hover:bg-indigo-500 hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out flex items-center`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
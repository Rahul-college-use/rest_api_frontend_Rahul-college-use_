import React from 'react';
import { GraduationCap, LayoutDashboard, UserPlus } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg text-white">
            <GraduationCap size={24} />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            EduManage
          </span>
        </div>
        
        <div className="flex gap-6 text-gray-600 font-medium">
          <a href="#" className="hover:text-blue-600 transition-colors flex items-center gap-1">
            <LayoutDashboard size={18} /> <span className="hidden sm:inline">Dashboard</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
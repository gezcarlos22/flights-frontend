'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Cloud, BarChart3, History, Info, LogOut, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useAuth } from '../contexts/AuthContext';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Weather', href: '/weather', icon: Cloud },
  { name: 'Statistics', href: '/statistics', icon: BarChart3 },
  { name: 'History', href: '/history', icon: History },
  { name: 'About Us', href: '/about', icon: Info },
];

export default function MobileNav() {
  const pathname = usePathname();
  const { username, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 flex items-center justify-between z-40 shadow-md">
        <div className="flex items-center gap-2">
          <Image 
            src="/assets/LOGO3.png" 
            alt="Flights On Time" 
            width={60} 
            height={60} 
            className=""
          />
          <span className="font-semibold text-xl">FlightOnTime</span>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-gray-800 rounded-md transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30 pt-16" 
          onClick={() => setIsOpen(false)} 
        />
      )}

      {/* Mobile Dropdown Menu */}
      <div 
        className={`md:hidden fixed top-16 left-0 right-0 bg-gray-900 text-white shadow-2xl z-30 transform transition-all duration-300 max-h-[calc(100vh-4rem)] overflow-y-auto ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        {/* Navigation Menu */}
        <nav className="space-y-2 px-4 py-6">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition ${
                  isActive
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <span className="mr-3">
                  <item.icon className="w-5 h-5" />
                </span>
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* User Info and Logout */}
        <div className="border-t border-gray-700 p-4 space-y-3">
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-xs text-gray-400">User</p>
            <p className="text-sm font-medium text-white truncate">{username}</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-3 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition"
          >
            <span className="mr-3">
              <LogOut className="w-5 h-5" />
            </span>
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
}

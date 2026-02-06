'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Cloud, BarChart3, History, Info, LogOut } from 'lucide-react';
import Image from 'next/image';
import { useAuth } from '../contexts/AuthContext';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Weather', href: '/weather', icon: Cloud },
  { name: 'Statistics', href: '/statistics', icon: BarChart3 },
  { name: 'History', href: '/history', icon: History },
  { name: 'About Us', href: '/about', icon: Info },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { username, logout } = useAuth();

  return (
    <div className="hidden md:flex h-screen w-64 flex-col bg-gray-900 py-10 px-5">
      <div className="flex flex-col justify-center items-center px-4 bg-gray-900">
        <Image 
          src="/assets/LOGO.png" 
          alt="Flights On Time" 
          width={200} 
          height={200} 
          className="mb-1 w-32 h-32 sm:w-40 sm:h-40"
        />
      </div>
      
      <nav className="flex-1 space-y-2 px-2 py-6">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center px-2 py-2 text-md font-medium rounded-md ${
                isActive
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
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
      <div className="border-t border-gray-700 pt-4 px-2">
        <div className="bg-gray-800 rounded-md p-3 mb-3">
          <p className="text-xs text-gray-400">User</p>
          <p className="text-sm font-medium text-white truncate">{username}</p>
        </div>
        <button
          onClick={logout}
          className="w-full flex items-center px-2 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition"
        >
          <span className="mr-2">
            <LogOut className="w-5 h-5" />
          </span> Sign Out
        </button>
      </div>
    </div>
  );
}
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <MobileNav />
      <main className="flex-1 overflow-y-auto bg-gray-100 w-full md:w-auto pt-16 md:pt-0">
        <div className="p-4 sm:p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
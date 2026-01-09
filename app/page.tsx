'use client';

import DashboardLayout from './components/DashboardLayout';
import StatCard from './components/StatCard';
import FlightCard from './components/FlightCard';
import WeatherCard from './components/WeatherCard';

export default function Home() {
  const recentFlights = [
    { id: 'FL001', route: 'NYC → LAX', status: 'On Time' as const, delay: '0 min' },
    { id: 'FL002', route: 'CHI → MIA', status: 'Delayed' as const, delay: '25 min' },
    { id: 'FL003', route: 'DFW → SEA', status: 'On Time' as const, delay: '0 min' },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Flights Predictions Dashboard</h1>
        
        {/* Statistics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Flights" value={1247} subtitle="This month" color="blue" />
          <StatCard title="On-Time Rate" value="87.3%" subtitle="Last 30 days" color="green" />
          <StatCard title="Avg Delay" value="12 min" subtitle="When delayed" color="orange" />
          <StatCard title="Weather Alert" value={2} subtitle="Active warnings" color="yellow" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Flights */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Flights</h2>
            <div className="space-y-3">
              {recentFlights.map((flight) => (
                <FlightCard
                  key={flight.id}
                  id={flight.id}
                  route={flight.route}
                  status={flight.status}
                  delay={flight.delay}
                />
              ))}
            </div>
          </div>

          {/* Current Weather Summary */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Weather Overview</h2>
            <div className="space-y-4">
              <WeatherCard title="▲ NYC Weather" description="22°C, Clear skies" color="blue" />
              <WeatherCard title="▼ LAX Weather" description="28°C, Partly cloudy" color="green" />
              <WeatherCard title="Flight Impact" description="Minor delays possible due to wind" color="yellow" />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

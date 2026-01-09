'use client';

import { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import SearchForm from '../components/SearchForm';
import WeatherInfoCard from '../components/WeatherInfoCard';
import WeatherCard from '../components/WeatherCard';

interface WeatherInfo {
  city: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  pressure: number;
  condition: string;
}

interface WeatherData {
  origin: WeatherInfo;
  destination: WeatherInfo;
}

export default function Weather() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!origin || !destination) return;
    
    setLoading(true);
    // Simulate API call - replace with actual weather API
    setTimeout(() => {
      const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Clear', 'Snow', 'Thunderstorm', 'Haze', 'Sleet', 'Windy', 'Partly Cloudy', 'Heavy Rain'];
      setWeatherData({
        origin: {
          city: origin,
          temperature: Math.floor(Math.random() * 30) + 5,
          humidity: Math.floor(Math.random() * 40) + 40,
          windSpeed: Math.floor(Math.random() * 20) + 5,
          pressure: Math.floor(Math.random() * 50) + 1000,
          condition: conditions[Math.floor(Math.random() * conditions.length)]
        },
        destination: {
          city: destination,
          temperature: Math.floor(Math.random() * 30) + 5,
          humidity: Math.floor(Math.random() * 40) + 40,
          windSpeed: Math.floor(Math.random() * 20) + 5,
          pressure: Math.floor(Math.random() * 50) + 1000,
          condition: conditions[Math.floor(Math.random() * conditions.length)]
        }
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <DashboardLayout>
      <div className="max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Weather Conditions</h1>
        
        <SearchForm
          origin={origin}
          destination={destination}
          loading={loading}
          onOriginChange={setOrigin}
          onDestinationChange={setDestination}
          onSearch={handleSearch}
        />

        {/* Weather Results */}
        {weatherData && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <WeatherInfoCard
              title="Origin"
              weatherInfo={weatherData.origin}
            />
            <WeatherInfoCard
              title="Destination"
              weatherInfo={weatherData.destination}
            />
          </div>
        )}

        {/* Flight Impact Analysis */}
        {weatherData && (
          <div className="mt-6 bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Flight Impact Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <WeatherCard
                title="Route Conditions"
                description={`${weatherData.origin.city} → ${weatherData.destination.city}`}
                color="blue"
              />
              <WeatherCard
                title="Weather Status"
                description="Conditions are suitable for flight operations"
                color="green"
              />
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
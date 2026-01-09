import Image from 'next/image';
import { Droplets, Wind, Gauge } from 'lucide-react';

interface WeatherInfo {
  city: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  pressure: number;
  condition: string;
}

interface WeatherInfoCardProps {
  title: string;
  weatherInfo: WeatherInfo;
}

function getWeatherIcon(condition: string): string {
  const conditionLower = condition.toLowerCase();
  if (conditionLower.includes('sunny')) return '/assets/weather/sunny.svg';
  if (conditionLower.includes('cloudy')) return '/assets/weather/cloudy.svg';
  if (conditionLower.includes('partly')) return '/assets/weather/partly-cloudy.svg';
  if (conditionLower.includes('heavy rain')) return '/assets/weather/heavy-rain.svg';
  if (conditionLower.includes('rain')) return '/assets/weather/rain.svg';
  if (conditionLower.includes('snow')) return '/assets/weather/snow.svg';
  if (conditionLower.includes('thunderstorm')) return '/assets/weather/thunderstorm.svg';
  if (conditionLower.includes('haze')) return '/assets/weather/haze.svg';
  if (conditionLower.includes('sleet')) return '/assets/weather/sleet.svg';
  if (conditionLower.includes('windy')) return '/assets/weather/windy.svg';
  return '/assets/weather/sunny.svg';
}

export default function WeatherInfoCard({ weatherInfo }: WeatherInfoCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      {/* Header */}
      <h3 className="text-xl font-semibold text-blue-600 mb-6">
        {weatherInfo.city}
      </h3>
      
      <div className="grid grid-cols-2 gap-6">
        {/* Left Column - Main Temperature Section */}
        <div className="flex items-center justify-center">
          <Image 
            src={getWeatherIcon(weatherInfo.condition)} 
            alt={weatherInfo.condition} 
            width={80} 
            height={80}
            className="mr-4"
          />
          <div>
            <div className="text-6xl font-light text-blue-600">
              {weatherInfo.temperature}°C
            </div>
            <div className="text-lg text-gray-600 capitalize">
              {weatherInfo.condition.toLowerCase()}
            </div>
          </div>
        </div>
        
        {/* Right Column - Weather Details */}
        <div className="space-y-3 flex flex-col justify-center items-center">
          <div className="flex items-center text-gray-500">
            <Droplets className="w-4 h-4 mr-2 text-gray-600" />
            <span className="text-sm mr-2">Humidity</span>
            <span className="text-sm font-medium text-blue-600">{weatherInfo.humidity}%</span>
          </div>
          
          <div className="flex items-center text-gray-500">
            <Wind className="w-4 h-4 mr-2 text-gray-600" />
            <span className="text-sm mr-2">Wind</span>
            <span className="text-sm font-medium text-blue-600">{weatherInfo.windSpeed}kph</span>
          </div>
          
          <div className="flex items-center text-gray-500">
            <Gauge className="w-4 h-4 mr-2 text-gray-600" />
            <span className="text-sm mr-2">Pressure</span>
            <span className="text-sm font-medium text-blue-600">{weatherInfo.pressure}hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
}
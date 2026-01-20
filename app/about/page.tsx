'use client';

import DashboardLayout from '../components/DashboardLayout';
import StatCard from '../components/StatCard';

export default function AboutPage() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>

        {/* Overview Section */}
        <div className="bg-white rounded-lg shadow p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Flight Delay Prediction System</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Welcome to our advanced Flight Delay Prediction System. Our platform leverages cutting-edge machine learning algorithms 
            and real-time weather data to provide accurate predictions about flight delays. We help airlines, passengers, and travel 
            agencies make informed decisions by predicting potential delays before they occur.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is to revolutionize air travel by reducing the impact of flight delays through predictive analytics and 
            intelligent forecasting. We believe that better information leads to better decisions, and better decisions create a 
            more efficient and reliable aviation industry.
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="Real-time Analysis" value="24/7" subtitle="Continuous monitoring" color="blue" />
            <StatCard title="Accuracy Rate" value="87.3%" subtitle="Prediction precision" color="green" />
            <StatCard title="Routes Covered" value="5000+" subtitle="Global airport pairs" color="orange" />
            <StatCard title="Data Sources" value="50M+" subtitle="Weather and flight data" color="yellow" />
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white rounded-lg shadow p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Frontend</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• React.js with Next.js</li>
                <li>• TypeScript for type safety</li>
                <li>• Tailwind CSS for styling</li>
                <li>• Lucide React for icons</li>
                <li>• Recharts for data visualization</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Backend & ML</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Python with machine learning frameworks</li>
                <li>• Real-time API integration</li>
                <li>• Weather data aggregation</li>
                <li>• Predictive modeling engine</li>
                <li>• Database optimization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our dedicated team consists of experienced data scientists, full-stack developers, and aviation experts who are passionate 
            about improving the travel experience. With years of combined experience in machine learning, software development, and the 
            aviation industry, were committed to delivering the most accurate predictions and best user experience.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}

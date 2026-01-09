'use client';

import DashboardLayout from '../components/DashboardLayout';
import { ChartWrapper, BarChart, PieChart, LineChart, useChartTheme } from '../components/Charts';

export default function Statistics() {
  const chartTheme = useChartTheme();
  const routeData = {
    xAxis: [{ scaleType: 'band' as const, data: ['NYC → LAX', 'CHI → MIA', 'DFW → SEA', 'ATL → DEN'] }],
    series: [{ data: [156, 142, 128, 115] }],
  };

  const statusData = [
    { id: 0, value: 1089, label: 'On Time', color: '#10B981' },
    { id: 1, value: 132, label: 'Delayed', color: '#F59E0B' },
    { id: 2, value: 26, label: 'Cancelled', color: '#EF4444' },
  ];

  const performanceData = {
    xAxis: [{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }],
    series: [
      { data: [89, 87, 91, 85, 88, 92, 86, 89, 90, 87, 85, 89], label: 'On-Time %' },
      { data: [12, 15, 8, 18, 14, 7, 16, 12, 10, 15, 17, 12], label: 'Avg Delay (min)' },
    ],
  };

  return (
    <DashboardLayout>
      <div className="max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Flight Statistics</h1>
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ChartWrapper title="Top Routes">
            <BarChart {...routeData} height={250} sx={chartTheme} />
          </ChartWrapper>
          
          <ChartWrapper title="Flight Status Distribution">
            <PieChart series={[{ data: statusData }]} height={250} sx={chartTheme} />
          </ChartWrapper>
        </div>

        <ChartWrapper title="Performance Trends (Last 12 Months)">
          <LineChart {...performanceData} height={350} sx={chartTheme} />
        </ChartWrapper>
      </div>
    </DashboardLayout>
  );
}
import DashboardLayout from '../components/DashboardLayout';
import FlightTable from '../components/FlightTable';
import StatsGrid from '../components/StatsGrid';

export default function History() {
  const flightHistory = [
    { id: 'FL001', route: 'NYC → LAX', date: '2024-01-15', status: 'On Time' as const, delay: '0 min' },
    { id: 'FL002', route: 'CHI → MIA', date: '2024-01-15', status: 'Delayed' as const, delay: '25 min' },
    { id: 'FL003', route: 'DFW → SEA', date: '2024-01-14', status: 'On Time' as const, delay: '0 min' },
    { id: 'FL004', route: 'ATL → DEN', date: '2024-01-14', status: 'Cancelled' as const, delay: 'N/A' },
    { id: 'FL005', route: 'BOS → SFO', date: '2024-01-13', status: 'Delayed' as const, delay: '15 min' },
    { id: 'FL006', route: 'LAS → ORD', date: '2024-01-13', status: 'On Time' as const, delay: '0 min' },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Flight History</h1>
        
        <FlightTable 
          flights={flightHistory} 
          title="Recent Flight Records" 
        />

        <div className="mt-8">
          <StatsGrid 
            sections={[
              {
                title: "Historical Trends",
                stats: [
                  { label: "Average Monthly Flights", value: "1,180" },
                  { label: "Best Performance Month", value: "December 2023" },
                  { label: "Most Delayed Route", value: "NYC → LAX" }
                ]
              },
              {
                title: "Data Summary",
                stats: [
                  { label: "Total Records", value: "15,247" },
                  { label: "Date Range", value: "Jan 2023 - Present" },
                  { label: "Data Quality", value: "98.5%", valueColor: "text-green-600" }
                ]
              }
            ]}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}
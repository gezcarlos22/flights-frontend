import InputField from './InputField';

interface SearchFormProps {
  origin: string;
  destination: string;
  loading: boolean;
  onOriginChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
  onSearch: () => void;
}

export default function SearchForm({
  origin,
  destination,
  loading,
  onOriginChange,
  onDestinationChange,
  onSearch
}: SearchFormProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Flight Route Weather</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InputField
          label="Origin"
          type="text"
          value={origin}
          onChange={onOriginChange}
          placeholder="e.g., New York"
        />
        <InputField
          label="Destination"
          type="text"
          value={destination}
          onChange={onDestinationChange}
          placeholder="e.g., Los Angeles"
        />
        <div className="flex items-end">
          <button
            onClick={onSearch}
            disabled={loading || !origin || !destination}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? 'Loading...' : 'Get Weather'}
          </button>
        </div>
      </div>
    </div>
  );
}
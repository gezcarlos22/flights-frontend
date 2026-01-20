import { useState } from 'react';
import InputField from './InputField';

interface AdvancedFlightSearchFormProps {
  origin: string;
  destination: string;
  airline: string;
  departureDate: string;
  departureTime: string;
  loading: boolean;
  onOriginChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
  onAirlineChange: (value: string) => void;
  onDepartureDateChange: (value: string) => void;
  onDepartureTimeChange: (value: string) => void;
  onSearch: () => void;
}

export default function AdvancedFlightSearchForm({
  origin,
  destination,
  airline,
  departureDate,
  departureTime,
  loading,
  onOriginChange,
  onDestinationChange,
  onAirlineChange,
  onDepartureDateChange,
  onDepartureTimeChange,
  onSearch
}: AdvancedFlightSearchFormProps) {
  const [originError, setOriginError] = useState<string | null>(null);
  const [destinationError, setDestinationError] = useState<string | null>(null);
  const [airlineError, setAirlineError] = useState<string | null>(null);
  const [dateError, setDateError] = useState<string | null>(null);

  const validateIata = (code: string) => /^[A-Z]{3}$/.test(code);
  const validateAirline = (code: string) => /^[A-Z]{2}$/.test(code);
  const validateDate = (date: string) => {
    if (!date) return true; // optional
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  };

  const handleOriginInput = (value: string) => {
    const clean = value.toUpperCase().replace(/[^A-Z]/g, '').slice(0, 3);
    onOriginChange(clean);
    setOriginError(clean && !validateIata(clean) ? 'IATA must have 3 letters (A–Z)' : null);
  };

  const handleDestinationInput = (value: string) => {
    const clean = value.toUpperCase().replace(/[^A-Z]/g, '').slice(0, 3);
    onDestinationChange(clean);
    setDestinationError(clean && !validateIata(clean) ? 'IATA must have 3 letters (A–Z)' : null);
  };

  const handleAirlineInput = (value: string) => {
    const clean = value.toUpperCase().replace(/[^A-Z]/g, '').slice(0, 2);
    onAirlineChange(clean);
    setAirlineError(clean && !validateAirline(clean) ? 'Airline must have 2 letters (A–Z)' : null);
  };

  const handleDateChange = (value: string) => {
    onDepartureDateChange(value);
    setDateError(value && !validateDate(value) ? 'Date must be today or later' : null);
  };

  const handleTimeChange = (value: string) => {
    onDepartureTimeChange(value);
  };

  const isSearchDisabled =
    loading ||
    !validateIata(origin) ||
    !validateIata(destination) ||
    (!!departureDate && !validateDate(departureDate));

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Flight Delay Prediction Model</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Origin */}
        <div>
          <InputField
            label="Origin (IATA)"
            type="text"
            value={origin}
            onChange={handleOriginInput}
            placeholder="e.g. JFK"
          />
          {originError && <p className="text-sm text-red-500 mt-1">{originError}</p>}
        </div>

        {/* Destination */}
        <div>
          <InputField
            label="Destination (IATA)"
            type="text"
            value={destination}
            onChange={handleDestinationInput}
            placeholder="e.g. LAX"
          />
          {destinationError && <p className="text-sm text-red-500 mt-1">{destinationError}</p>}
        </div>

        {/* Airline */}
        <div>
          <InputField
            label="Airline"
            type="text"
            value={airline}
            onChange={handleAirlineInput}
            placeholder="e.g. AA"
          />
          {airlineError && <p className="text-sm text-red-500 mt-1">{airlineError}</p>}
        </div>

        {/* Departure Date */}
        <div>
          <InputField
            label="Departure Date"
            type="date"
            value={departureDate}
            onChange={handleDateChange}
          />
          {dateError && <p className="text-sm text-red-500 mt-1">{dateError}</p>}
        </div>

        {/* Departure Time */}
        <div>
          <InputField
            label="Departure Time"
            type="time"
            value={departureTime}
            onChange={handleTimeChange}
          />
        </div>
      </div>

      {/* Search Button */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={onSearch}
          disabled={isSearchDisabled}
          className="w-full md:w-auto bg-blue-600 text-white py-2 px-8 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Searching...' : 'Search Flights'}
        </button>
      </div>
    </div>
  );
}

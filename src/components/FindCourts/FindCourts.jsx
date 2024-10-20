import React, { useState } from "react";

const FindCourt = () => {
  const [sport, setSport] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    // Implement search functionality here
    console.log(`Searching for courts for ${sport} in ${location}`);
  };

  return (
    <div className="bg-gradient-to-r from-[#e0f7fa] to-[#80deea] min-h-screen p-8">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-[#006064]">Find Your Court</h1>
        <p className="text-md text-gray-700 mt-4">
          Locate the best sports courts near you to play your favorite games!
        </p>
      </header>

      {/* Search Section */}
      <div className="max-w-lg mx-auto mb-8 rounded-lg shadow-lg bg-white p-6">
        <h2 className="text-2xl font-semibold text-[#004d40] mb-4">Search for Courts</h2>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            value={sport}
            onChange={(e) => setSport(e.target.value)}
            placeholder="Sport Type (e.g., Tennis, Basketball)"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#004d40] transition"
          />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location (e.g., City, State)"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#004d40] transition"
          />
          <button
            onClick={handleSearch}
            className="bg-[#00796b] text-white font-semibold py-3 rounded-lg hover:bg-[#004d40] transition"
          >
            Search Courts
          </button>
        </div>
      </div>

      {/* Court Results Section (Placeholder) */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-[#004d40] mb-6">Available Courts</h2>
        <div className="bg-white shadow-md rounded-lg p-4">
          {/* Placeholder for court results */}
          <p className="text-gray-500">No courts found. Please adjust your search criteria.</p>
        </div>
      </div>
    </div>
  );
};

export default FindCourt;

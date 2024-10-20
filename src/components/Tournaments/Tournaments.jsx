import React, { useState } from "react";

const Tournament = () => {
  const [tournamentName, setTournamentName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const handleRegistration = () => {
    // Implement registration functionality here
    console.log(`Registering for tournament: ${tournamentName} on ${date} at ${location}`);
  };

  return (
    <div className="bg-gradient-to-b from-[#ffeb3b] to-[#ffc107] min-h-screen p-8">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-6xl font-extrabold text-[#ff6f00]">Join the Tournament</h1>
        <p className="text-lg text-gray-800 mt-4">
          Compete in exciting tournaments and showcase your skills!
        </p>
      </header>

      {/* Tournament Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
        {[
          { name: "Summer Championship", date: "July 15, 2024", location: "City Stadium" },
          { name: "Fall League", date: "October 10, 2024", location: "Community Park" },
          { name: "Winter Tournament", date: "December 5, 2024", location: "Downtown Arena" },
        ].map((tournament, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-[#ff6f00] mb-2">{tournament.name}</h2>
            <p className="text-gray-600">Date: {tournament.date}</p>
            <p className="text-gray-600">Location: {tournament.location}</p>
            <button className="mt-4 bg-[#ff6f00] text-white font-semibold py-2 px-4 rounded hover:bg-[#e65100] transition">
              Register Now
            </button>
          </div>
        ))}
      </div>

      {/* Registration Form Section */}
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-semibold text-[#ff6f00] mb-4">Register for a Tournament</h2>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            value={tournamentName}
            onChange={(e) => setTournamentName(e.target.value)}
            placeholder="Tournament Name"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#ff6f00] transition"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#ff6f00] transition"
          />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#ff6f00] transition"
          />
          <button
            onClick={handleRegistration}
            className="bg-[#ff6f00] text-white font-semibold py-3 rounded-lg hover:bg-[#e65100] transition"
          >
            Submit Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tournament;

import  { useState } from 'react';
import PlayerList from './PlayerList'; // Import the PlayerList component
import { FaBasketballBall, FaCity } from 'react-icons/fa'; // Icons for sport and city

const FindPlayer = () => {
  const [sport, setSport] = useState('');
  const [city, setCity] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);

  const handleSearch = () => {
    if (sport && city) {
      setSearchClicked(true); // Trigger search on button click
    } else {
      alert('Please select both a sport and city.');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://source.unsplash.com/featured/?sports)' }} // Background image related to sports
    >
      <div className="bg-white bg-opacity-90 shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Find a Player</h2>

        {/* Sport Selection */}
        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-700 mb-2">Select Sport:</label>
          <div className="relative">
            <FaBasketballBall className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Enter Sport"
              value={sport}
              onChange={(e) => setSport(e.target.value)}
              className="form-input w-full pl-10 rounded-full border border-gray-300 h-12 p-3 bg-gray-50 text-base focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* City Selection */}
        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-700 mb-2">Enter City:</label>
          <div className="relative">
            <FaCity className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Enter City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="form-input w-full pl-10 rounded-full border border-gray-300 h-12 p-3 bg-gray-50 text-base focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="w-full h-12 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold rounded-full transition hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Search Player
        </button>

        {/* Display PlayerList Component when searchClicked is true */}
        {searchClicked && <PlayerList sport={sport} city={city} />}
      </div>
    </div>
  );
};

export default FindPlayer;

import React, { useState, useEffect } from 'react';
import { getDatabase, ref, query, orderByChild, equalTo, onValue } from 'firebase/database';
import { app } from '../../firebase'; // Import your firebase config

const PlayerList = ({ sport, city }) => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getDatabase(app);
    const playersRef = ref(db, 'users');
    
    // Query players based on the selected sport
    const sportQuery = query(playersRef, orderByChild('sports'), equalTo(sport));

    onValue(sportQuery, (snapshot) => {
      const data = snapshot.val();
      const matchingPlayers = [];

      if (data) {
        Object.keys(data).forEach((key) => {
          const player = data[key];
          // Check if the player's city matches the selected city
          if (player.city && player.city.toLowerCase() === city.toLowerCase()) {
            matchingPlayers.push(player);
          }
        });
      }

      setPlayers(matchingPlayers);
      setLoading(false);
    });
  }, [sport, city]);

  if (loading) {
    return (
      <div className="loading-spinner flex justify-center items-center mt-8">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        <p className="text-lg font-semibold ml-4">Loading players...</p>
      </div>
    );
  }

  if (players.length === 0) {
    return (
      <div className="no-players text-center mt-8">
        <p className="text-lg text-gray-600 font-semibold">
          No players found for <span className="text-blue-500 font-bold">{sport}</span> in <span className="text-blue-500 font-bold">{city}</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="player-list mt-6 p-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-center">
        Players who play <span className="text-blue-500">{sport}</span> in <span className="text-blue-500">{city}</span>:
      </h3>
      <ul className="list-none">
        {players.map((player, index) => (
          <li key={index} className="bg-gray-100 rounded-lg p-4 mb-4 shadow-md">
            <p className="text-lg font-bold mb-1">{player.name}</p>
            <p className="text-gray-600">Age: {player.age}</p>
            <p className="text-gray-600">Gender: {player.gender}</p>
            <p className="text-gray-600">Bio: {player.bio || 'No bio available'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;

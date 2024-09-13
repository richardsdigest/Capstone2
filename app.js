import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/players')
      .then(response => {
        setPlayers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the players!', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Player List</h1>
      <ul>
        {players.map(player => (
          <li key={player.player_id}>{player.player_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

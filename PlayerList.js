import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PlayerCard from './PlayerCard';
import styles from './PlayerList.module.css';

const PlayerList = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/players')
      .then(response => setPlayers(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Player List</h1>
      <div className={styles.grid}>
        {players.map((player) => (
          <PlayerCard key={player.player_id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default PlayerList;

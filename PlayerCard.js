import React from 'react';
import styles from './PlayerCard.module.css';

const PlayerCard = ({ player }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.playerName}>{player.player_name}</h2>
      <p className={styles.teamName}>Team: {player.team_name}</p>
    </div>
  );
};

export default PlayerCard;

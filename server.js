const express = require('express');
const axios = require('axios');
const db = require('./db');
require('dotenv').config();

const app = express();
app.use(express.json());

async function fetchAndStoreData() {
  try {
    const response = await axios.get(process.env.API_URL);
    const players = response.data.players;

    players.forEach(async (player) => {
      const { player_name, team_id } = player;

      await db.query(
        'INSERT INTO players (player_name, team_id) VALUES ($1, $2)',
        [player_name, team_id]
      );
    });

    console.log('API data fetched and stored');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchAndStoreData();

app.get('/players', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM players');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

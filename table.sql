CREATE TABLE players (
    player_id SERIAL PRIMARY KEY,
    player_name VARCHAR(255),
    team_id INT
);

CREATE TABLE teams (
    team_id SERIAL PRIMARY KEY,
    team_name VARCHAR(255)
);

CREATE TABLE games (
    game_id SERIAL PRIMARY KEY,
    team1_id INT REFERENCES teams(team_id),
    team2_id INT REFERENCES teams(team_id),
    season_id INT,
    game_date DATE
);

CREATE TABLE player_stats (
    stat_id SERIAL PRIMARY KEY,
    player_id INT REFERENCES players(player_id),
    game_id INT REFERENCES games(game_id),
    points INT
);

CREATE TABLE seasons (
    season_id SERIAL PRIMARY KEY,
    season_name VARCHAR(255)
);

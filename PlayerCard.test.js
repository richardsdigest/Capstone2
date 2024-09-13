import { render, screen } from '@testing-library/react';
import PlayerCard from './PlayerCard';

test('renders player name and team name', () => {
  const player = { player_name: 'LeBron James', team_name: 'Lakers' };

  render(<PlayerCard player={player} />);

  const playerName = screen.getByText(/LeBron James/i);
  const teamName = screen.getByText(/Team: Lakers/i);

  expect(playerName).toBeInTheDocument();
  expect(teamName).toBeInTheDocument();
});

import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import PlayerList from './PlayerList';

jest.mock('axios');

test('renders player list from API', async () => {
  const players = [
    { player_id: 1, player_name: 'LeBron James', team_name: 'Lakers' },
    { player_id: 2, player_name: 'Kevin Durant', team_name: 'Nets' },
  ];

  axios.get.mockResolvedValue({ data: players });

  render(<PlayerList />);

  await waitFor(() => {
    const player1 = screen.getByText(/LeBron James/i);
    const player2 = screen.getByText(/Kevin Durant/i);
    expect(player1).toBeInTheDocument();
    expect(player2).toBeInTheDocument();
  });
});

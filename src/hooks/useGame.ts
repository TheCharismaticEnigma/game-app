import { useQuery } from '@tanstack/react-query';
import HttpService from '../utils/RogueHttpService';
import staleTime from '../utils/staleTime';
import { Game } from './useAllGames';

const useGame = (target: number | string) => {
  const genreService = new HttpService<Game>(`/games/${target}`);

  return useQuery({
    queryKey: ['games', target],
    queryFn: () => {
      return genreService.getSpecific();
    },
    staleTime: staleTime('24h'),
  });
};

export default useGame;

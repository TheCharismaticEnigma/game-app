import { useQuery } from '@tanstack/react-query';
import { Trailer } from '../entities/Trailer';
import HttpService from '../utils/RogueHttpService';
import staleTime from '../utils/staleTime';

const useTrailers = (gameId: number) => {
  const gameService = new HttpService<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ['trailers', gameId],
    queryFn: () => {
      return gameService.getAll();
    },
    staleTime: staleTime('24h'),
  });
};

export default useTrailers;

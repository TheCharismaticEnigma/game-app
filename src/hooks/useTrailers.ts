import { Trailer } from '../entities/Trailer';
import { useQuery } from '@tanstack/react-query';
import HttpService from '../utils/RogueHttpService';

const useTrailers = (gameId: number) => {
  const gameService = new HttpService<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ['trailers', gameId],
    queryFn: () => {
      return gameService.getAll();
    },
  });
};

export default useTrailers;

import { useQuery } from '@tanstack/react-query';
import staleTime from '../utils/staleTime';
import HttpService, { FetchResponse } from '../utils/RogueHttpService';
import { Screenshot } from '../entities/Screenshot';

const useScreenshots = (gameId: number) => {
  const gameService = new HttpService<Screenshot>(
    `/games/${gameId}/screenshots`
  );

  return useQuery<FetchResponse<Screenshot>, Error>({
    queryKey: ['screenshots', gameId],
    queryFn: () => {
      return gameService.getAll();
    },
    staleTime: staleTime('24h'),
  });
};

export default useScreenshots;

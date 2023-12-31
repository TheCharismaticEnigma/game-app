import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../store';
import HttpService, { FetchResponse } from '../utils/RogueHttpService';
import { Platform } from '../entities/Platform';
import staleTime from '../utils/staleTime';

interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
  released?: string;
  playtime?: number;
  ratings_count?: number;
  reviews_count?: number;
  genres?: {
    id: number;
    name: string;
    slug: string;
  }[];
}

const gameService = new HttpService<Game>('/games');

// Query Object Pattern. Have all the queries in a single object instead of individual queries.
// When query param values are nullish, they aren't sent.

/*
const useGames = (gameQuery: GameQuery) => {
  const requestConfig = {
    params: {
      genres: gameQuery?.selectedGenre?.id,
      parent_platforms: gameQuery?.selectedPlatform?.id,
      search: gameQuery?.searchQuery,
      ordering: gameQuery?.orderBy,
      page: gameQuery?.page ?? 1,
      page_size: 20,
    },
  };

  return useData<Game>('/games', requestConfig, [gameQuery]);
};
*/

// everytime cache changes, data is refetched
const useGames = (gameQuery: GameQuery) => {
  const requestConfig = {
    params: {
      genres: gameQuery?.selectedGenreId,
      parent_platforms: gameQuery?.selectedPlatformId,
      search: gameQuery?.searchQuery,
      ordering: gameQuery?.orderBy,
      page: gameQuery?.page ?? 1,
      page_size: 20,
    },
  };

  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () => {
      return gameService.getAll(requestConfig);
    },
    staleTime: staleTime('24h'),
  });
};

export { useGames, type Game };

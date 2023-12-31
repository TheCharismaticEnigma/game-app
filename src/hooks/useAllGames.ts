// Contains the infinite scrolling functionality as opposed to pagination.

import { useInfiniteQuery } from '@tanstack/react-query';
import { GameQuery } from '../store';
import HttpService, { FetchResponse } from '../utils/RogueHttpService';
import staleTime from '../utils/staleTime';
import { Game } from '../entities/Game';

const gameService = new HttpService<Game>('/games');

// Query Object Pattern. Have all the queries in a single object instead of individual queries.
// When query param values are nullish, they aren't sent.

/*
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
*/

const useAllGames = (gameQuery: GameQuery) => {
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],

    //   If the param keys are mapped to null/undefined, they're omitted.

    queryFn: ({ pageParam = 1 }) => {
      return gameService.getAll({
        params: {
          genres: gameQuery?.selectedGenreId,
          parent_platforms: gameQuery?.selectedPlatformId,
          search: gameQuery?.searchQuery,
          ordering: gameQuery?.orderBy,
          page: pageParam,
          page_size: 20,
        },
      });
    },

    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: staleTime('24h'),
  });
};

export { useAllGames, type Game };

import useData from './useData';
import { GameQuery } from '../components/AppContent';

interface Platform {
  id: number;
  name: string;
  slug: string;
}
interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
}

// Query Object Pattern. Have all the queries in a single object instead of individual queries.

const useGames = (gameQuery: GameQuery) => {
  const requestConfig = {
    params: {
      genres: gameQuery?.selectedGenre?.id,
      parent_platforms: gameQuery?.selectedPlatform?.id,
    },
  };

  return useData<Game>('/games', requestConfig, [gameQuery]);
};

export { useGames, type Game };

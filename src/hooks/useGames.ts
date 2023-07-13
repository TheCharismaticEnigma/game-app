import useData from './useData';
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
}

// Finally block doesn't work in effect hook.

const useGames = () => useData<Game>('/games');

export { useGames, type Game };

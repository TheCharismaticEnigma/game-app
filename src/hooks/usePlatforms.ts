import useData from './useData';

interface Platform {
  id: number;
  slug: string;
  name: string;
  platforms: {
    id: number;
    name: string;
    slug: string;
    games_count: number;
  }[];
}

const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

export default usePlatforms;
export { usePlatforms, type Platform };

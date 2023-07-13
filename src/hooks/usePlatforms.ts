import useData from './useData';

interface ParentPlatform {
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

const usePlatforms = () => useData<ParentPlatform>('/platforms/lists/parents');

export default usePlatforms;

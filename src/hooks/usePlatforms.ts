import { useQuery } from '@tanstack/react-query';
import HttpService, { FetchResponse } from '../utils/RogueHttpService';

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

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
// Everytime query key changes, data is refetched.

const usePlatforms = () => {
  return useQuery({
    queryKey: ['platforms'],
    queryFn: () =>
      HttpService.get<FetchResponse<Platform>>('/platforms/lists/parents').then(
        (r) => r.data
      ),
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default usePlatforms;
export { usePlatforms, type Platform };

import { useQuery } from '@tanstack/react-query';
import HttpService, { FetchResponse } from '../utils/RogueHttpService';
import platforms from '../data/platforms';
import staleTime from '../utils/staleTime';
import { Platform } from '../entities/Platform';

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
// Everytime query key changes, data is refetched.

const platformService = new HttpService<Platform>('/platforms/lists/parents');

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: () => {
      return platformService.getAll();
    },
    staleTime: staleTime('24h'),
    initialData: platforms,
  });
};

export default usePlatforms;
export { usePlatforms, type Platform };

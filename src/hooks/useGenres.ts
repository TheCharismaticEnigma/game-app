import { useQuery } from '@tanstack/react-query';
import HttpService from '../utils/RogueHttpService';
import { FetchResponse } from './useData';
interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>('/genres');

const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: () =>
      HttpService.get<FetchResponse<Genre>>('/genres').then((r) => r.data),
    staleTime: 24 * 60 * 60 * 1000, // Refetch after 24h
  });
};

export { type Genre, useGenres };

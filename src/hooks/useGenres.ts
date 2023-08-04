import { useQuery } from '@tanstack/react-query';
import HttpService, { FetchResponse } from '../utils/RogueHttpService';
import genres from '../data/genres';
import staleTime from '../utils/staleTime';
import { Genre } from '../entities/Genre';
// const useGenres = () => useData<Genre>('/genres');
const genreService = new HttpService<Genre>('/genres');

// const useGenres = () => {
//   return useQuery<FetchResponse<Genre>, Error>({
//     queryKey: ['genres'],
//     queryFn: () =>{ return genreService.getAll() ; },
//     staleTime: 24 * 60 * 60 * 1000, // Refetch after 24h
//   });
// };

const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: () => {
      return genreService.getAll();
    },
    staleTime: staleTime('24h'),
    initialData: genres,
  });
};

export { type Genre, useGenres };

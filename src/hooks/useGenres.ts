import { useState, useEffect } from 'react';
import { AxiosError } from 'axios';
import HttpService from '../utils/RogueHttpService';

interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

interface FetchGenreResponse {
  status: number;
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<AxiosError>();
  const [isLoading, setLoadingStatus] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();

    //   Execute side-effects inducing code after each component rendering.
    HttpService.get<FetchGenreResponse>('/genres', {
      signal: controller.signal,
    })
      .then((response) => {
        setGenres(response.data.results);
        setLoadingStatus(false);
      })
      .catch((error: AxiosError) => {
        setError(error);
        setLoadingStatus(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export { type Genre, useGenres };

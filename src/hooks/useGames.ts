import { useState, useEffect } from 'react';
import { AxiosError } from 'axios';
import HttpService from '../utils/RogueHttpService';

interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
}

interface FetchGamesResponse {
  status: number;
  statusText: string;
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    const controller = new AbortController();
    HttpService.get<FetchGamesResponse>('/games', {
      signal: controller.signal,
    })
      .then((response) => {
        setGames(response.data.results);
        console.log(response.data.results);
      })
      .catch((error: AxiosError) => {
        setError(error);
      });

    HttpService.get('/genres').then((response) => console.log(response));

    return () => controller.abort();
  }, []);

  return { games, error };
};

export { useGames, type Game };

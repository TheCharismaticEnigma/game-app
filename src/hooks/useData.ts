import { useState, useEffect } from 'react';
import { AxiosError } from 'axios';
import HttpService from '../utils/RogueHttpService';

interface FetchResponse<T> {
  status: number;
  statusText: string;
  results: T[];
}

function useData<T>(path: string) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<AxiosError>();
  const [isLoading, setLoadingStatus] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    HttpService.get<FetchResponse<T>>(path, {
      signal: controller.signal,
    })
      .then((response) => {
        const { results } = response.data;
        setData(results);
        setLoadingStatus(false);
      })
      .catch((error: AxiosError) => {
        setError(error);
        setLoadingStatus(false);
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
}

export default useData;

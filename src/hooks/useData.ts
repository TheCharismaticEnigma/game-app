import { useState, useEffect } from 'react';
import { AxiosError, AxiosRequestConfig } from 'axios';
import HttpService from '../utils/RogueHttpService';

export interface FetchResponse<T> {
  status: number;
  statusText: string;
  count: number;
  results: T[];
}

// When any of dependencies change, useData will be rerendered, and we'll get result again.
// If no dependencies, then
// The values of query parameters will be in dependency array too. (dynamically).

function useData<T>(
  path: string,
  requestConfig?: AxiosRequestConfig,
  dependencies?: any[]
) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<AxiosError>();
  const [isLoading, setLoadingStatus] = useState(true);
  const deps = dependencies ? [...dependencies] : [];

  useEffect(() => {
    const controller = new AbortController();

    HttpService.get<FetchResponse<T>>(path, {
      signal: controller.signal,
      ...requestConfig,
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
  }, deps);

  return { data, error, isLoading };
}

export default useData;

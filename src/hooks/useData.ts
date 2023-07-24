// import { useState, useEffect } from 'react';
// import { AxiosError, AxiosRequestConfig } from 'axios';
// import HttpService from '../utils/RogueHttpService';

// Custom Data Hook is inutile right now.
// Before removing a building block => Analyze the cost/impact of removal.
// HOW? Finding all references to it.

/*
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
*/

import axios, { AxiosRequestConfig } from 'axios';
//  const key = `b3edbbccbb684a8b88a68744acbcf2df`;
export interface FetchResponse<T> {
  count: number;
  previous: string | null;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: `9458eeb70a3e4c7ab3b0dae9dfcccaa4`,
  },
});

class HttpService<T> {
  #endpoint: string;

  constructor(path: string) {
    this.#endpoint = path;
  }

  getAll = (requestConfig?: AxiosRequestConfig) => {
    // This keyword will now point to enclosing parent.
    const result = axiosInstance
      .get<FetchResponse<T>>(this.#endpoint, requestConfig)
      .then((res) => {
        return res.data;
      });

    return result;
  };

  getSpecific = () => {
    return axiosInstance.get<T>(this.#endpoint).then((response) => {
      return response.data;
    });
  };
}

export default HttpService;

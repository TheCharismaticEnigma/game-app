import axios from 'axios';

//  const key = `b3edbbccbb684a8b88a68744acbcf2df`;
export interface FetchResponse<T> {
  status: number;
  statusText: string;
  count: number;
  results: T[];
}

const HttpService = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: `9458eeb70a3e4c7ab3b0dae9dfcccaa4`,
  },
});

export default HttpService;

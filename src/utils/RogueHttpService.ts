import axios from 'axios';

//  const key = `b3edbbccbb684a8b88a68744acbcf2df`;

export default function RogueHttpService(
  path: string,
  key = `b3edbbccbb684a8b88a68744acbcf2df`
) {
  const fullUrl = `https://api.rawg.io/api/${path}?key=${key}`;

  const result = axios
    .get(fullUrl)
    .then((response) => response.data.results)
    .catch((error) => error);

  return result;
}

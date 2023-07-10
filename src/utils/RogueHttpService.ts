import axios from 'axios';

//  const key = `b3edbbccbb684a8b88a68744acbcf2df`;

const HttpService = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: `b3edbbccbb684a8b88a68744acbcf2df`,
  },
});

export default HttpService;

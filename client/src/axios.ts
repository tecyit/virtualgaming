import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `https://api.sportsdata.io/v3/nba`,
  headers: {
    'Ocp-Apim-Subscription-Key': '5c23ff1445454273807219546af4b40d',
  },
});

export default axiosInstance;

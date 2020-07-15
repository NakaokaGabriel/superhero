import axios from 'axios';

const api = axios.create({
  baseURL: 'https://superheroapi.com/api.php/117930899992596',
});

export default api;

import axios from 'axios';

const KEY = 'a0610a93-7fab-46ea-88e9-3be815e1fc5a';

export default axios.create({
  baseURL: 'https://api.thecatapi.com/v1/images',
  headers: {
    'x-api-key': KEY
  }
});

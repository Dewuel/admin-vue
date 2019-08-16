import axios from 'axios'
const http = axios.create({
  baseURL: 'http://127.0.0.1:3000/api/admin',
  headers: {
    timeout: 1500
  }
});
export default http
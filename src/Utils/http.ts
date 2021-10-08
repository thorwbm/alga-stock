import axios from 'axios'

const http = axios.create({
<<<<<<< HEAD
  baseURL: 'https://jsonplaceholder.typicode.com'
=======
  baseURL: 'http://localhost:3024',
  headers: {
    authorization: 'Bearer 123'
  }
>>>>>>> 5eeade030132a658920a6f512a144e5739685089
})

export default http

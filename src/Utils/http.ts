import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3024',
  headers: {
    authrization: 'bear 123'
  }
})

export default http

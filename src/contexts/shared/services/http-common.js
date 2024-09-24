import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const http = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem('token')}`
  }
})

http.defaults.headers.common['Content-type'] = 'application/json'

export default http

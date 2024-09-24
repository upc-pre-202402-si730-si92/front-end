import http from '@/contexts/shared/services/http-common.js'

export class SecurityApiService {
  async login(body) {
    return await http.post('/login', body)
  }
  async logout() {
    return await http.post('/logout')
  }
  async register(body) {
    return await http.post('/register', body)
  }
  async getCurrentUser() {
    return await http.get('/user')
  }
}

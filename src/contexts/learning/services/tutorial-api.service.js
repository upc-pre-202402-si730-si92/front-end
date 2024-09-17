import http from '@/contexts/shared/services/http-common.js'

export class TutorialApiService {
  async getAll() {
    return await http.get('/tutorials')
  }
  async get(id) {
    return await http.get(`/tutorials/${id}`)
  }
  async save(body) {
    return await http.post('/tutorials', body)
  }

}

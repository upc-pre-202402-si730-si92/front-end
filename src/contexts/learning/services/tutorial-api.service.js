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
  async update(id, body) {
    return await http.put(`/tutorials/${id}`, body)
  }
  async delete(id) {
    return await http.delete(`/tutorials/${id}`)
  }
}

import http from '@/contexts/shared/services/http-common.js'

export class TutorialApiService {
  async getAll() {
    return await http.get('/tutorials')
  }
}

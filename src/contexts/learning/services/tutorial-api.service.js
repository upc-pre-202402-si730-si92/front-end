import axios from 'axios'

export class TutorialApiService {

  async getAll(){
   return await axios.get("http://localhost:3000/tutorials")
  }
}
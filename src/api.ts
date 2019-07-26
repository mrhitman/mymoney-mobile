import axios, { AxiosInstance } from 'axios'

class Api {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({ baseURL: 'https://mymoney-server-api.herokuapp.com' })
  }

  public async getCurrencies() {
    return this.client.get('/currencies');
  }
}

export default Api;
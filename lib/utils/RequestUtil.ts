import FormData from 'form-data';
import axios from 'axios';

interface IParams {
  path: string;
  json: {
    acao: string;
    [key: string]: string;
  };
}

export class RequestUtil {
  private base4DevsUrl: string;

  constructor() {
    this.base4DevsUrl = 'https://www.4devs.com.br';
  }

  public async post({ path, json }: IParams): Promise<any> {
    const formData = new FormData();
    for (let key in json) {
      formData.append(key, json[key]);
    }
    const response = await axios.post(`${this.base4DevsUrl}${path}`, formData, {
      headers: formData.getHeaders(),
      transformResponse: r => r,
    });
    return response;
  }
}

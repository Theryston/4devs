import { RequestUtil } from '../../utils/RequestUtil';
import { ICNHValid } from '../../interfaces/ICNH';

export class ValidateCNH {
  requestUtil = new RequestUtil();
  async execute({ cnh }: { cnh: string }): Promise<ICNHValid> {
    const { data }: { data: string } = await this.requestUtil.post({
      path: '/ferramentas_online.php',
      json: {
        acao: 'validar_cnh',
        txt_cnh: cnh,
      },
    });
    const isValid = data.toLowerCase().includes('verdadeiro');

    return {
      isValid,
    };
  }
}

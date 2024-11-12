import { RequestUtil } from '../../utils/RequestUtil';
import { IRGValid } from '../../interfaces/IRG';

export class ValidateRG {
  requestUtil = new RequestUtil();
  async execute({ rg }: { rg: string }): Promise<IRGValid> {
    const { data }: { data: string } = await this.requestUtil.post({
      path: '/ferramentas_online.php',
      json: {
        acao: 'validar_rg',
        txt_rg: rg,
      },
    });
    const isValid = data.toLowerCase().includes('verdadeiro');

    return {
      isValid,
    };
  }
}

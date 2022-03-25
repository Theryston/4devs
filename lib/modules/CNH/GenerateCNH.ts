import { ICNH } from '../../interfaces/ICNH';
import { RequestUtil } from '../../utils/RequestUtil';

export class GenerateCNH {
  requestUtil = new RequestUtil();
  async execute(): Promise<ICNH> {
    const { data: cnh }: { data: string } = await this.requestUtil.post({
      path: '/ferramentas_online.php',
      json: {
        acao: 'gerar_cnh',
      },
    });

    return {
      cnh: cnh,
    };
  }
}

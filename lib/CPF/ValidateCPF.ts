import { RequestUtil } from '../utils/RequestUtil';
import { ICPFValid } from '../interfaces/CPF';

export class ValidateCPF {
  requestUtil = new RequestUtil();
  async execute({ cpf }: { cpf: string }): Promise<ICPFValid> {
    const { data }: { data: string } = await this.requestUtil.post({
      path: '/ferramentas_online.php',
      json: {
        acao: 'validar_cpf',
        txt_cpf: cpf,
      },
    });
    const isValid = data.toLowerCase().includes('verdadeiro');

    return {
      isValid,
    };
  }
}

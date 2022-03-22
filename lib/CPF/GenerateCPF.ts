import { RequestUtil } from '../utils/RequestUtil';
import { ICPFGenerated } from '../interfaces/CPF';

export class GenerateCPF {
  requestUtil = new RequestUtil();
  async execute({
    isWithDots,
    stateCode,
  }: {
    isWithDots?: boolean;
    stateCode?: string;
  }): Promise<ICPFGenerated> {
    const { data: cpf }: { data: string } = await this.requestUtil.post({
      path: '/ferramentas_online.php',
      json: {
        acao: 'gerar_cpf',
        pontuacao: isWithDots ? 'S' : 'N',
        cpf_estado: stateCode || '',
      },
    });

    return {
      cpf: cpf.toString(),
    };
  }
}

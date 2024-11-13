import { RequestUtil } from '../../utils/RequestUtil';
import { IRGGenerated } from '../../interfaces/IRG';

export class GenerateRG {
  requestUtil = new RequestUtil();
  async execute({
    isWithDots,
    stateCode,
  }: {
    isWithDots?: boolean;
    stateCode?: string;
  }): Promise<IRGGenerated> {
    const { data: rg }: { data: string } = await this.requestUtil.post({
      path: '/ferramentas_online.php',
      json: {
        acao: 'gerar_rg',
        pontuacao: isWithDots ? 'S' : 'N',
        rg_estado: stateCode || '',
      },
    });

    return {
      rg,
    };
  }
}

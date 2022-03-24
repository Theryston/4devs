import { RequestUtil } from '../../utils/RequestUtil';
import { ICertificate } from '../../interfaces/ICertificate';

export class GenerateCertificates {
  requestUtil = new RequestUtil();
  async execute({
    isWithDots,
    type,
  }: {
    isWithDots?: boolean;
    type?: 'BIRTH' | 'WEDDING' | 'RELIGIOUS_MARRIAGE' | 'DEATH';
  }): Promise<ICertificate> {
    const typeParamToRequest = await this.handleTypeToRequest(type);

    const { data: certificate }: { data: string } = await this.requestUtil.post(
      {
        path: '/ferramentas_online.php',
        json: {
          acao: 'gerador_certidao',
          pontuacao: isWithDots ? 'S' : 'N',
          tipo_certidao: typeParamToRequest,
        },
      },
    );

    return {
      certificate: certificate,
    };
  }

  private async handleTypeToRequest(
    type: 'BIRTH' | 'WEDDING' | 'RELIGIOUS_MARRIAGE' | 'DEATH' | undefined,
  ): Promise<string> {
    switch (type) {
      case 'BIRTH':
        return 'nascimento';
      case 'WEDDING':
        return 'casamento';
      case 'RELIGIOUS_MARRIAGE':
        return 'casamento_religioso';
      case 'DEATH':
        return 'obito';
      default:
        return 'Indiferente';
    }
  }
}

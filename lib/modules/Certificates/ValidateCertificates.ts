import { RequestUtil } from '../../utils/RequestUtil';
import { ICertificateValid } from '../../interfaces/ICertificate';

export class ValidateCertificates {
  requestUtil = new RequestUtil();
  async execute({
    certificate,
  }: {
    certificate: string;
  }): Promise<ICertificateValid> {
    const { data }: { data: string } = await this.requestUtil.post({
      path: '/ferramentas_online.php',
      json: {
        acao: 'validar_certidao',
        txt_certidao: certificate,
      },
    });
    const isValid = data.toLowerCase().includes('verdadeiro');

    return {
      isValid,
    };
  }
}

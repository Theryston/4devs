import { ICertificate, ICertificateValid } from '../../interfaces/ICertificate';
import { GenerateCertificates } from './GenerateCertificates';
import { ValidateCertificates } from './ValidateCertificates';

export class Certificates {
  public static async generate(options?: {
    isWithDots?: boolean;
    type?: 'BIRTH' | 'WEDDING' | 'RELIGIOUS_MARRIAGE' | 'DEATH';
  }): Promise<ICertificate> {
    const generateCertificates = new GenerateCertificates();
    return await generateCertificates.execute(options ? options : {});
  }
  public static async validate({
    certificate,
  }: {
    certificate: string;
  }): Promise<ICertificateValid> {
    const validateCertificates = new ValidateCertificates();
    return await validateCertificates.execute({ certificate });
  }
}

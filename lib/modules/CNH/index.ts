import { ICNH, ICNHValid } from 'lib/interfaces/ICNH';
import { GenerateCNH } from './GenerateCNH';
import { ValidateCNH } from './ValidateCNH';

export class CNH {
  public static async validate({ cnh }: { cnh: string }): Promise<ICNHValid> {
    const validateCNH = new ValidateCNH();
    return await validateCNH.execute({ cnh });
  }
  public static async generate(): Promise<ICNH> {
    const generate = new GenerateCNH();
    return generate.execute();
  }
}

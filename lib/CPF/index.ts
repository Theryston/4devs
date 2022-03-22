import { ValidateCPF } from './ValidateCPF';
import { GenerateCPF } from './GenerateCPF';

import { ICPFValid } from '../interfaces/CPF';
import { ICPFGenerated } from '../interfaces/CPF';

export class CPF {
  public static async validate({ cpf }: { cpf: string }): Promise<ICPFValid> {
    const validateCPF = new ValidateCPF();
    return await validateCPF.execute({ cpf });
  }
  public static async generate(options?: {
    isWithDots?: boolean;
    stateCode?: string;
  }): Promise<ICPFGenerated> {
    const generateCPF = new GenerateCPF();
    return await generateCPF.execute(options ? options : {});
  }
}

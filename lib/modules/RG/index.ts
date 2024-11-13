import { ValidateRG } from './ValidateRG';
import { GenerateRG } from './GenerateRG';

import { IRGValid } from '../../interfaces/IRG';
import { IRGGenerated } from '../../interfaces/IRG';

export class RG {
  public static async validate({ rg }: { rg: string }): Promise<IRGValid> {
    const validateRG = new ValidateRG();
    return await validateRG.execute({ rg });
  }
  public static async generate(options?: {
    isWithDots?: boolean;
    stateCode?: string;
  }): Promise<IRGGenerated> {
    const generateRG = new GenerateRG();
    return await generateRG.execute(options ? options : {});
  }
}

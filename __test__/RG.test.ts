import { RG } from '../lib/index';

interface IRG {
  rg: string;
  isValid: boolean;
}

const rgMock: IRG = {
  rg: '30.737.817-2',
  isValid: true,
};

describe('RG lib', () => {
  it('should create an instance', () => {
    expect(new RG()).toBeTruthy();
  });

  it('should be valid RG', async () => {
    const RGIsValid = await RG.validate({ rg: rgMock.rg });

    expect(RGIsValid.isValid).toBe(rgMock.isValid);
  });

  it('should generate a RG with dots', async () => {
    const { rg } = await RG.generate({ isWithDots: true });

    expect(rg).toHaveLength(12);
  });

  it('should generate a RG without dots', async () => {
    const { rg } = await RG.generate({ isWithDots: false });

    expect(rg).toHaveLength(9);

    
  });

  it('should generate a RG with state', async () => {
    const { rg } = await RG.generate({ stateCode: 'BA' });

    expect(rg).toHaveLength(9);
  });
});

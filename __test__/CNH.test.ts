import { CNH } from '../lib/index';

const mockCNH = {
  cnh: '27872004149',
  isValid: true,
};

describe('CNH', () => {
  it('should create an instance', async () => {
    expect(new CNH()).toBeTruthy();
  });

  it('should to generate a new CNH', async () => {
    const { cnh } = await CNH.generate();
    expect(cnh).toBeTruthy();
    expect(cnh).toBeGreaterThan(10);
  });

  it('should validate the CNH', async () => {
    const { isValid } = await CNH.validate({ cnh: mockCNH.cnh });
    expect(isValid).toBeTruthy();
  });
});

import { CPF } from '../lib/index';

interface ICPF {
  cpf: string;
  isValid: boolean;
}

const cpfMock: ICPF = {
  cpf: '999.999.999-99',
  isValid: false,
};

describe('CPF lib', () => {
  it('should be valid CPF', async () => {
    const CPFIsValid = await CPF.validate({ cpf: cpfMock.cpf });

    expect(CPFIsValid.isValid).toBe(cpfMock.isValid);
  });

  it('should generate a CPF with dots', async () => {
    const { cpf } = await CPF.generate({ isWithDots: true });

    expect(cpf).toHaveLength(14);
  });

  it('should generate a CPF without dots', async () => {
    const { cpf } = await CPF.generate({ isWithDots: false });

    expect(cpf).toHaveLength(11);
  });
});

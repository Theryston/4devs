import { Certificates } from '../lib/modules/Certificates';

const certificateMock = {
  certificate: '18734801552022427855667824940025',
  isValid: true,
};

const certificateMockNotValid = {
  certificate: '99999999999999999999999999999999',
  isValid: false,
};

describe('Certificates', () => {
  it('should create an instance', () => {
    expect(new Certificates()).toBeTruthy();
  });

  it('should generate a certificate without dots', async () => {
    const { certificate } = await Certificates.generate();
    expect(certificate).toBeTruthy();
    expect(certificate.length).toBeGreaterThan(30);
  });

  it('should generate a certificate with dots', async () => {
    const { certificate } = await Certificates.generate({ isWithDots: true });
    expect(certificate).toBeTruthy();
    expect(certificate.length).toBeGreaterThan(38);
  });

  it('should generate a certificate with type', async () => {
    const { certificate } = await Certificates.generate({ type: 'BIRTH' });
    expect(certificate).toBeTruthy();
    expect(certificate.length).toBeGreaterThan(30);
  });

  it('should validate a invalid certificate', async () => {
    const { isValid } = await Certificates.validate({
      certificate: certificateMockNotValid.certificate,
    });
    expect(isValid).toBeFalsy();
  });

  it('should validate a valid certificate', async () => {
    const { isValid } = await Certificates.validate({
      certificate: certificateMock.certificate,
    });
    expect(isValid).toBeTruthy();
  });
});

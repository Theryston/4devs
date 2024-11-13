const { Certificates, CPF, RG } = require('../dist');

(async () => {
  {
    // CPF
    const { cpf } = await CPF.generate({ isWithDots: true, stateCode: 'BA' }); // 759.135.665-80

    console.log('CPF: ', cpf);

    const { isValid } = await CPF.validate({ cpf });

    console.log(`Is valid: ${isValid}`);
  }
  {
    // RG
    const { rg } = await RG.generate({ isWithDots: true, stateCode: 'BA' }); // 10.838.180-8

    console.log('RG: ', rg);

    const { isValid } = await RG.validate({ rg });

    console.log(`Is valid: ${isValid}`);
  }
  {
    // Certificates
    const { certificate } = await Certificates.generate({
      isWithDots: true,
      type: 'BIRTH',
    }); // 133316 01 55 2010 1 15029 495 7668399-42

    console.log('certificate: ', certificate);

    const { isValid } = await Certificates.validate({ certificate });

    console.log(`Is valid: ${isValid}`);
  }
})();

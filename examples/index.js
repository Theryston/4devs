const { Certificates, CPF, RG } = require('../dist');

(async () => {
  {
    // CPF
    const { cpf } = await CPF.generate({ isWithDots: true, stateCode: 'BA' }); // 34317074087

    console.log('CPF: ',cpf);

    const { isValid } = await CPF.validate({ cpf });

    console.log(isValid);
  }
  {
    // RG
    const { rg } = await RG.generate({ isWithDots: true, stateCode: 'BA' }); // 34317074087

    console.log('RG: ',rg);

    const { isValid } = await RG.validate({ rg });

    console.log(isValid);
  }
  {
    // Certificates
    const { certificate } = await Certificates.generate();

    console.log('certificate: ', certificate);

    const { isValid } = await Certificates.validate({ certificate });

    console.log(isValid);
  }
})();

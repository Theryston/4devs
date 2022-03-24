const { Certificates, CPF } = require('../dist');

(async () => {
  {
    // CPF
    const { cpf } = await CPF.generate({ isWithDots: true, stateCode: 'BA' }); // 34317074087

    console.log(cpf);

    const { isValid } = await CPF.validate({ cpf });

    console.log(isValid);
  }
  {
    // Certificates
    const { certificate } = await Certificates.generate();

    console.log(certificate);

    const { isValid } = await Certificates.validate({ certificate });

    console.log(isValid);
  }
})();

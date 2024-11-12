[<img src="https://user-images.githubusercontent.com/72868196/159564161-7a74f05f-c97e-4d11-839e-ab772af687aa.png" width="200px">](https://www.npmjs.com/package/4devs)

**under development, everything in the documentation is already implemented and working**

# Quick Start

npm package that generates and validates: Birth Certificate, CNH, Bank Account, CPF, Resume, Nicks, PIS/PASEP, CNPJ, CEP, RG, Voter Title, Credit Card, documents of people, Image and much more...

```ts
import { CPF } from '4devs';

const { cpf } = await CPF.generate(); // 34317074087

await CPF.validate({ cpf: '999.999.999-99' }); // false
```

## Installation

yarn

```shell
yarn add 4devs
```

npm

```shell
npm install --save 4devs
```

# Navigation

- [CPF](#cpf)
- [RG](#rg)
- [Certificates](#certificates)

# Docs:

here you can see the documentation of all the features already implemented

## CPF:

CPF is one of the classes that 4devs has, this class is able to generate and validate a cpf based on the services on the pages [https://www.4devs.com.br/gerador_de_cpf](https://www.4devs.com.br/gerador_de_cpf) and [https://www.4devs.com.br/validador_cpf](https://www.4devs.com.br/validador_cpf)

### validate a CPF

```ts
import { CPF } from '4devs';

const { isValid } = await CPF.validate({ cpf: '577.572.660-09' });
```

parameters:

- `cpf` (required) the CPF you want to validate

return:

```ts
{
  isValid: boolean;
}
```

## RG:

RG is one of the classes that 4devs has, this class is able to generate and validate a rg based on the services on the pages [https://www.4devs.com.br/gerador_de_cpf](https://www.4devs.com.br/gerador_de_rg) and [https://www.4devs.com.br/validador_rg](https://www.4devs.com.br/validador_rg)

### validate a RG

```ts
import { RG } from '4devs';

const { isValid } = await RG.validate({ rg: '30.737.817-2' });
```

parameters:

- `rg` (required) the RG you want to validate

return:

```ts
{
  isValid: boolean;
}
```

### generate a new RG

```ts
import { RG } from '4devs';

const { rg } = await RG.generate({ isWithDots: true, stateCode: 'BA' });
```

parameters:

- `isWithDots` (optional) if true the RG will be generated with dots example: 30.737.817-2 if not generated without example: 60.778.777-0

- `stateCode` (optional) code of the state where the RG belongs, example: "BA" or "SP"

return:

```ts
{
  rg: string;
}
```

## Certificates:

Certificates is one of the classes that 4devs has, this class is able to generate and validate a certificates based on the services on the pages [https://www.4devs.com.br/validador_certidoes](https://www.4devs.com.br/validador_certidoes) and [https://www.4devs.com.br/gerador_numero_certidoes](https://www.4devs.com.br/gerador_numero_certidoes)

### validate a Certificates

```ts
import { Certificates } from '4devs';

const { isValid } = await Certificates.validate({
  certificate: '107211 01 55 2018 1 07592 378 3808990-80',
});
```

parameters:

- `certificate` (required) the certificate you want to validate

return:

```ts
{
  isValid: boolean;
}
```

### generate a new Certificate

```ts
import { Certificates } from '4devs';

const { certificate } = await Certificates.generate({
  isWithDots: true,
  type: 'BIRTH',
});
```

parameters:

- `isWithDots` (optional) if true the certificate will be generated with dots example: 107211 01 55 2018 1 07592 378 3808990-80 if not generated without example: 21931801552017107907909207153815

- `type` (optional) the certificate type, can be: `'BIRTH' | 'WEDDING' | 'RELIGIOUS_MARRIAGE' | 'DEATH'`

return:

```ts
{
  certificate: string;
}
```

## CNH:

CNH is one of the classes that 4devs has, this class is able to generate and validate a CNH based on the services on the pages [https://www.4devs.com.br/validador_cnh](https://www.4devs.com.br/validador_cnh) and [https://www.4devs.com.br/gerador_de_cnh](https://www.4devs.com.br/gerador_de_cnh)

### validate a CNH

```ts
import { CNH } from '4devs';

const { isValid } = await CNH.validate({
  cnh: '79973493843',
});
```

parameters:

- `cnh` (required) the cnh you want to validate

return:

```ts
{
  isValid: boolean;
}
```

### generate a new CNH

```ts
import { CNH } from '4devs';

const { cnh } = await CNH.generate();
```

return:

```ts
{
  cnh: string;
}
```

# Footer:

This package is created using the website [https://www.4devs.com.br](https://www.4devs.com.br/). but the site has no responsibility for this content it was made in an open source way and without contacting the site.

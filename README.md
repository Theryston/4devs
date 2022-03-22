[<img src="https://user-images.githubusercontent.com/72868196/159564161-7a74f05f-c97e-4d11-839e-ab772af687aa.png" width="200px">](https://www.npmjs.com/package/4devs)

**under development, everything in the documentation is already implemented and working**

# Quick Start

npm package that generates and validates: Birth Certificate, CNH, Bank Account, CPF, Resume, Nicks, PIS/PASEP, CNPJ, CEP, RG, Voter Title, Credit Card, documents of people, Image, Password and much more...

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

[CPF](#cpf)

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

### generate a new CPF

```ts
import { CPF } from '4devs';

const { cpf } = await CPF.generate({ isWithDots: true, stateCode: 'BA' });
```

parameters:

- `isWithDots` (optional) if true the CPF will be generated with dots example: 218.61.715-34 if not generated without example: 60778779564

- `stateCode` (optional) code of the state where the CPF belongs, example: "BA" or "SP"

return:

```ts
{
  cpf: string;
}
```

# Footer:

This package is created using the website [https://www.4devs.com.br](https://www.4devs.com.br/). but the site has no responsibility for this content it was made in an open source way and without contacting the site.

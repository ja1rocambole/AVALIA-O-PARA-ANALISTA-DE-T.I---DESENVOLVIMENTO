# avalia-o-para-analista-de-t.i---desenvolvimento

`avalia-o-para-analista-de-t.i---desenvolvimento` é uma biblioteca de utilitários simples para formatação e mascaramento de dados comuns brasileiros, como números de telefone, CNPJ, CPF e CEP. Esta biblioteca ajuda a padronizar e aplicar máscaras a esses campos com validação básica.

## Instalação

Inicialize um novo projeto npm no diretório:
```
npm init -y
```

Instale o typescript
```
npm install typescript --save-dev
```

Inicie o arquivo de configuração do typescript
```
npx tsc --init
```

Você pode instalar este pacote usando npm:
```
npm i @ja1rocambole/ava-analista-ti-joao-fernandes
```


Para testar o código basta transpilar o código

```
npx tsc 
```
 
E depois execultar
```
node arquivo.js
```

## Uso
#### Máscara para Números de Telefone

```
import { maskFromPhoneNumber } from '@ja1rocambole/ava-analista-ti-joao-fernandes';

const phone = "91987044516";
console.log(maskFromPhoneNumber(phone)); 
// Saída: (91) 98704-4516
```

#### Máscara para CNPJ
```
import { maskFromCNPJ } from '@ja1rocambole/ava-analista-ti-joao-fernandes';

const cnpj = "61204974000181";
console.log(maskFromCNPJ(cnpj)); 
// Saída: 61.204.974/0001-81
```

#### Máscara para CPF
```
import { maskFromCPF } from '@ja1rocambole/ava-analista-ti-joao-fernandes';

const cpf = "05112084219";
console.log(maskFromCPF(cpf)); 
// Saída: 051.120.842-19
```

#### Máscara para CEP
```
import { maskFromCEP } from '@ja1rocambole/ava-analista-ti-joao-fernandes';

const cep = "68745470";
console.log(maskFromCEP(cep)); 
// Saída: 68745-470
```

## Validação
Cada função verifica se a string de entrada contém o número correto de dígitos e retorna uma mensagem caso a entrada seja muito curta ou muito longa.

Por exemplo:

```
const invalidPhone = "12345";

console.log(maskFromPhoneNumber(invalidPhone)); 
// Saída: "Número de telefone muito curto."
```
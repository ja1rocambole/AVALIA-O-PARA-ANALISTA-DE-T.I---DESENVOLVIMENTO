# avalia-o-para-analista-de-t.i---desenvolvimento

`avalia-o-para-analista-de-t.i---desenvolvimento` é uma biblioteca de utilitários simples para formatação e mascaramento de dados comuns brasileiros, como números de telefone, CNPJ, CPF e CEP. Esta biblioteca ajuda a padronizar e aplicar máscaras a esses campos com validação básica.

## Instalação

Você pode instalar este pacote usando npm:

```bash
npm install avalia-o-para-analista-de-t.i---desenvolvimento
```

## Uso
#### Máscara para Números de Telefone

```
import { maskFromPhoneNumber } from 'avalia-o-para-analista-de-t.i---desenvolvimento';

const phone = "91987044516";
console.log(maskFromPhoneNumber(phone)); 
// Saída: (91) 98704-4516
```

#### Máscara para CNPJ
```
import { maskFromCNPJ } from 'avalia-o-para-analista-de-t.i---desenvolvimento';

const cnpj = "61204974000181";
console.log(maskFromCNPJ(cnpj)); 
// Saída: 61.204.974/0001-81
```

#### Máscara para CPF
```
import { maskFromCPF } from 'avalia-o-para-analista-de-t.i---desenvolvimento';

const cpf = "05112084219";
console.log(maskFromCPF(cpf)); 
// Saída: 051.120.842-19
```

#### Máscara para CEP
```
import { maskFromCEP } from 'avalia-o-para-analista-de-t.i---desenvolvimento';

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
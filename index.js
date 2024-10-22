"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maskFromCEP = exports.maskFromCNPJ = exports.maskFromCPF = exports.maskFromPhoneNumber = void 0;
const maskFromPhoneNumber = (phoneNumber) => {
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    if (cleanPhone.length !== 11) {
        return cleanPhone.length < 11 ? "Número de telefone muito curto." : "Número de telefone muito longo.";
    }
    if (/^(\d)\1+$/.test(cleanPhone))
        return "Número inválido.";
    if (cleanPhone.length == 11 && parseInt(cleanPhone.substring(2, 3)) != 9)
        return "Número inválido, insira o 9 após o DDD";
    const codigosDDD = [
        11, 12, 13, 14, 15, 16, 17, 18, 19,
        21, 22, 24, 27, 28,
        31, 32, 33, 34, 35, 37, 38,
        41, 42, 43, 44, 45, 46,
        47, 48, 49,
        51, 53, 54, 55, 61,
        62, 63, 64, 65, 66, 67, 68, 69,
        71, 73, 74, 75, 77,
        79,
        81, 82, 83, 84, 85, 86, 87, 88, 89,
        91, 92, 93, 94, 95, 96, 97, 98, 99
    ];
    // Verifica se o DDD é válido
    const ddd = parseInt(cleanPhone.substring(0, 2));
    if (codigosDDD.indexOf(ddd) === -1)
        return "DDD inválido.";
    const phoneNumberFormated = cleanPhone
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1');
    return phoneNumberFormated;
};
exports.maskFromPhoneNumber = maskFromPhoneNumber;
const maskFromCPF = (cpf) => {
    const cleanCPF = cpf.replace(/\D/g, '');
    if (cleanCPF.length !== 11) {
        return cleanCPF.length < 11 ? "CPF muito curto." : "CPF muito longo.";
    }
    if (/^(\d)\1+$/.test(cleanCPF))
        return "CPF inválido.";
    const calculateDigit = (cleanCPF, initialFactor) => {
        let sum = 0;
        for (let i = 0; i < initialFactor - 1; i++) {
            sum += parseInt(cleanCPF.charAt(i)) * (initialFactor - i);
        }
        const rest = sum % 11;
        return rest < 2 ? 0 : 11 - rest;
    };
    const digito2 = calculateDigit(cleanCPF, 11);
    const digito1 = calculateDigit(cleanCPF, 10);
    const isValidCPF = digito1 === parseInt(cleanCPF.charAt(9)) && digito2 === parseInt(cleanCPF.charAt(10));
    if (!isValidCPF) {
        return "CPF inválido.";
    }
    const cpfFomated = cleanCPF
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
    return cpfFomated;
};
exports.maskFromCPF = maskFromCPF;
const maskFromCNPJ = (cnpj) => {
    const cleanCNPJ = cnpj.replace(/\D/g, '');
    if (cleanCNPJ.length !== 14) {
        return cleanCNPJ.length < 14 ? "CNPJ muito curto." : "CNPJ muito longo.";
    }
    const b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const c = cleanCNPJ.split('').map(Number); // Converte os caracteres para números
    // Validação do primeiro dígito verificador
    let n = 0; // Inicializa n
    for (let i = 0; i < 12; i++) {
        n += c[i] * b[i + 1];
    }
    if (c[12] !== (((n %= 11) < 2) ? 0 : 11 - n))
        return "CNPJ inválido.";
    // Validação do segundo dígito verificador
    n = 0; // Reinicia n para o segundo cálculo
    for (let i = 0; i <= 12; i++) {
        n += c[i] * b[i];
    }
    if (c[13] !== (((n %= 11) < 2) ? 0 : 11 - n))
        return "CNPJ inválido.";
    // Aplica a máscara ao CNPJ
    const cnpjFormatted = cleanCNPJ
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1/$2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
    return cnpjFormatted;
};
exports.maskFromCNPJ = maskFromCNPJ;
const maskFromCEP = (cep) => {
    const cleanCEP = cep.replace(/\D/g, '');
    if (cleanCEP.length !== 8) {
        return cleanCEP.length < 8 ? "CEP muito curto." : "CEP muito longo.";
    }
    const cepFomated = cleanCEP
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1');
    return cepFomated;
};
exports.maskFromCEP = maskFromCEP;
console.log((0, exports.maskFromCNPJ)("68745470"));
console.log((0, exports.maskFromCNPJ)("87306724000146"));
console.log((0, exports.maskFromCNPJ)("31715412000131"));

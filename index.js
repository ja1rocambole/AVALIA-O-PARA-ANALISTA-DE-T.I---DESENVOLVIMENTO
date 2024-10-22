"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maskFromCEP = exports.maskFromCPF = exports.maskFromCNPJ = exports.maskFromPhoneNumber = void 0;
const maskFromPhoneNumber = (phoneNumber) => {
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    if (cleanPhone.length !== 11) {
        return cleanPhone.length < 11 ? "Número de telefone muito curto." : "Número de telefone muito longo.";
    }
    const phoneNumberFormated = cleanPhone
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1');
    return phoneNumberFormated;
};
exports.maskFromPhoneNumber = maskFromPhoneNumber;
const maskFromCNPJ = (cnpj) => {
    const cleanCNPJ = cnpj.replace(/\D/g, '');
    if (cleanCNPJ.length !== 14) {
        return cleanCNPJ.length < 14 ? "CNPJ muito curto." : "CNPJ muito longo.";
    }
    const cnpjFomated = cleanCNPJ
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1/$2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
    return cnpjFomated;
};
exports.maskFromCNPJ = maskFromCNPJ;
const maskFromCPF = (cpf) => {
    const cleanCPF = cpf.replace(/\D/g, '');
    if (cleanCPF.length !== 11) {
        return cleanCPF.length < 11 ? "CPF muito curto." : "CPF muito longo.";
    }
    const cpfFomated = cleanCPF
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
    return cpfFomated;
};
exports.maskFromCPF = maskFromCPF;
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

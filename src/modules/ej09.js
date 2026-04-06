import fs from 'fs';

function validarPassword(password) {
    if (typeof password !== 'string') {
        return "Password inválida";
    }

    const tieneMinimo8 = password.length >= 8;
    const tieneNumero = /[0-9]/.test(password);
    const tieneMayuscula = /[A-Z]/.test(password);

    if (tieneMinimo8 && tieneNumero && tieneMayuscula) {
        return "Password válida";
    } else {
        return "Password inválida";
    }
}

console.log(validarPassword("Hola1234")); 
console.log(validarPassword("hola1234"));  
console.log(validarPassword("Holaabcd")); 
console.log(validarPassword("Ho1"));       
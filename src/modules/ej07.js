import fs from 'fs';

let contador = 1;

const intervalo = setInterval(() => {
    console.log(contador);
    contador++;
}, 1000);

setTimeout(() => {
    clearInterval(intervalo);
    console.log("Fin del contador");
}, 10000);
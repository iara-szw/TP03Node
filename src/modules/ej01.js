import fs from 'fs';

const ARCHIVO_ENTRADA           = "./productos.json";

console.clear();

console.log(leerProductos(ARCHIVO_ENTRADA));

function leerProductos(ARCHIVO_ENTRADA){
const dataRaw = fs.readFileSync(ARCHIVO_ENTRADA);
 const producto = JSON.parse(dataRaw);

return producto;
}
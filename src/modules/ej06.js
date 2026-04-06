import fs from 'fs';

 const ARCHIVO_ENTRADA = "./productos.json";
 const data = fs.readFileSync(ARCHIVO_ENTRADA);
const productos = JSON.parse(data)

let datosNuevos= `Nombre, precio\n`;
productos.forEach(p => {
  datosNuevos += `${p.nombre},${p.precio}\n`;
});

try {
  fs.writeFileSync('productos.csv', datosNuevos);
  console.log('Archivo productos.csv creado exitosamente.');
} catch (err) {
  console.error('Error al crear el archivo:', err);
}
import fs from 'fs';

agregarProducto( );

function agregarProducto(nombre, precio){
    if (!nombre || typeof nombre !== 'string' || nombre.trim() === '') {
        console.error('El producto tiene que tener un nombre valido.');
        return;
    }
    if (precio === undefined || typeof precio !== 'number' || precio <= 0) {
        precio=0;
    }
    try {
        const ARCHIVO_ENTRADA = "./productos.json";
        const data = fs.readFileSync(ARCHIVO_ENTRADA);
        let prods = JSON.parse(data);
        const nuevoObjeto = { nombre, precio };
        prods.push(nuevoObjeto);
        fs.writeFileSync(ARCHIVO_ENTRADA, JSON.stringify(prods, null, 1));
        console.log('Producto agregado');
    } catch (error) {
        console.error('Error al agregar el producto:', error);
    }

}





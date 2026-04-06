import fs from 'fs';


function buscarProducto(nombre){
    try {
        const ARCHIVO_ENTRADA = "./productos.json";
        const data = fs.readFileSync(ARCHIVO_ENTRADA);
        let prods = JSON.parse(data);
        const producto = prods.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());
        if (producto) {
            console.log(`Producto encontrado. Nombre: ${producto.nombre}, Precio: ${producto.precio}`);
        } else {
            console.log('Producto no encontrado');
        }
    } catch (error) {
        console.error('Error al buscar el producto:', error);
    }

}

buscarProducto("mouse");



import fetch from 'node-fetch';  // Importamos node-fetch

async function obtenerPais(nombrePais) {
  const url = `https://restcountries.com/v3.1/name/${nombrePais}?fullText=true`;

  try {
    // Realizamos la petición a la API
    const respuesta = await fetch(url);
    
    // Verificamos si la respuesta fue exitosa (status 200)
    if (!respuesta.ok) {
      throw new Error(`No se encontró información para el país: ${nombrePais}`);
    }
    
    // Parseamos la respuesta como JSON
    const datos = await respuesta.json();
    
    // Obtenemos la información del primer país (la API devuelve una lista)
    const pais = datos[0];
    
    // Extraemos la información relevante
    const nombre = pais.name.common;
    const capital = pais.capital ? pais.capital[0] : 'No disponible';
    const region = pais.region;
    const poblacion = pais.population;
    const bandera = pais.flags.svg;

    // Mostramos la información en consola
    console.log(`País: ${nombre}`);
    console.log(`Capital: ${capital}`);
    console.log(`Región: ${region}`);
    console.log(`Población: ${poblacion}`);
    console.log(`Bandera: ${bandera}`);
  } catch (error) {
    // Si ocurre un error (por ejemplo, país no encontrado), lo mostramos en consola
    console.error('Error al obtener los datos del país:', error.message);
  }
}

// Ejemplo de uso
obtenerPais("Argentina");
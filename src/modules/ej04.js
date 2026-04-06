import axios from 'axios'

// Poner en cero para ejecutar el ejercicio
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '1'

async function obtenerPais(nombrePais) {
  const url = `https://restcountries.com/v3.1/name/${nombrePais}`;

  try {
      const respuesta = await axios.get(url);

    if (!respuesta || respuesta.status !== 200 || !respuesta.data || !Array.isArray(respuesta.data) || respuesta.data.length === 0) {
      throw new Error(`No se encontró información para el país: ${nombrePais}`);
    }
    const datos = respuesta.data[0];
    const nombre = datos.name && datos.name.common ? datos.name.common : nombrePais;
    const capital = datos.capital && datos.capital.length ? datos.capital[0] : 'No disponible';
    const region = datos.region || 'No disponible';
    const poblacion = datos.population || 'No disponible';
    const bandera = (datos.flags && (datos.flags.svg || datos.flags.png)) || 'No disponible';

    console.log(`País: ${nombre}`);
    console.log(`Capital: ${capital}`);
    console.log(`Región: ${region}`);
    console.log(`Población: ${poblacion}`);
    console.log(`Bandera: ${bandera}`);
  } catch (error) {
    console.error('Error al obtener los datos del país:', error.message);
  }
}
obtenerPais("Argentina");
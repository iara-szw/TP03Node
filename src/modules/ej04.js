import dayjs from 'dayjs';
function mostrarFechaYHora() {
  // Obtener la fecha actual
  const fechaActual = dayjs().format('DD/MM/YYYY');  // Formato: dd/mm/yyyy
  // Obtener la hora actual
  const horaActual = dayjs().format('HH:mm');  // Formato: HH:mm (24 horas)
  
  // Mostrar los resultados en consola
  console.log(`Fecha actual: ${fechaActual}`);
  console.log(`Hora actual: ${horaActual}`);
}

// Llamada a la función para mostrar la fecha y hora
mostrarFechaYHora();
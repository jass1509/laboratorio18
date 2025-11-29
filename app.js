import multiplicar, { dividir } from 'multiplicacionDivision.js';
import { sumar, restar } from 'sumaResta.js';

try {
  console.log('Suma:', sumar(10, 5));
  console.log('Resta:', restar(10, 5));
  console.log('Multiplicación:', multiplicar(10, 5));
  console.log('División:', dividir(10, 0));
} catch (err) {
  console.error('Error en división:', err.message);
}

import Cliente from './cliente.js';
import Impuesto from './impuesto.js';

let impuesto1 = new Impuesto(5000, 20);
let cliente1 = new Cliente('oscar', impuesto1);

let impuesto2 = new Impuesto(1000,10);
let cliente2= new Cliente('Pedro', impuesto2)



console.log(cliente1.nombre);
console.log(cliente1.calcularImpuesto());
console.log(impuesto1)

console.log(cliente2.nombre);
console.log(cliente2.calcularImpuesto());
console.log(impuesto2)


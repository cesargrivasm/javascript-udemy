console.log('probando');

let a = 10;
let b = a;
a = 30;

console.log({a, b});

let juan = { nombre: 'juan'};
let ana = juan;
 console.log({juan, ana});

 //si se pone ... en el parametro del metodo es un operador rest
 //si se pone fue del parametro es un operador spread.
 //para separar la propiedades y valores de los objetos
//  el parametro rest une todas las variables y las trasnforma en un objeto
 const cambiaNombre = ( persona ) => {
    persona.nombre = 'tony';
    return persona;
 }

 let peter = { nombre: 'peter'};
 let tony = cambiaNombre(peter);

 console.log({peter, tony});

  const frutas = ['manzana','pera', 'pina'];

  console.time('slice');
  const otrasFrutas = frutas.slice();
  console.timeEnd('slice');

  console.time('spread');
    const otrasFrutas2 = [...frutas];
    console.timeEnd('spread');

//   const otrasFrutas = frutas.slice();

  otrasFrutas.push('mango');

  console.table({frutas, otrasFrutas});


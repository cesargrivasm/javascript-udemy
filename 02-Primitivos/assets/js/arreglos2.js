
let juegos = ['zelda', 'mario', 'metroid', 'chrono'];

console.log(juegos);

console.log('Largo: ',juegos.length);


let primero = juegos[0];

console.log('el primero es: ',primero);

let ultimo = juegos[juegos.length - 1];

console.log('el ultimo es: ',ultimo);

console.log({primero,ultimo});

juegos.forEach((elemento,indice, arr) => {
console.log(elemento,indice,arr);   
});


let nuevaLongitud = juegos.push('f-zero');//agregar un elemento al final

console.log({juegos});

console.log({nuevaLongitud, juegos});

let nuevoElemento = juegos.unshift('mortal kombat');//agregar un elemento al principio

console.log({nuevoElemento,juegos});

let borrarElemento = juegos.pop();//eliminar el ultimo elemento del arreglo

console.log({borrarElemento,juegos});

let pos = 1;

// juegos.splice(pos,2);

let juegosBorrados = juegos.splice(pos,2); //borrar elementos, cuantas posiciones y elementos a borrar
console.log({juegosBorrados,juegos});


let metroidIndex = juegos.indexOf('metroid');

console.log({metroidIndex});

//TODO: referencias 




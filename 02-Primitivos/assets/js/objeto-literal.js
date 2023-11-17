let personajes = {
    nombre: 'tony stark',
    codeName: 'ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        long: -118.70
    },
    trajes: ['mark I', 'mark V', 'hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'malibu, california'
    },
    'ultima pelicula': 'infinity war',
};

console.log(personajes);

console.log('nombre', personajes.nombre);//usando la notacion de punto
console.log('nombre', personajes['nombre']);//usando la notacion de corchete
console.log('edad', personajes.edad);
console.log('edad', personajes['edad']);

console.log('coords', personajes.coords)
console.log('lat ', personajes.coords.lat);
console.log('long ', personajes.coords.long);

console.log('el numero de trajes es ', personajes.trajes.length);
console.log('el ultimo traje es ', personajes.trajes[personajes.trajes.length -1]);

const x = 'vivo';

console.log('vivo', personajes[x]);

console.log(personajes["ultima pelicula"]);

// console.log(personajes["ultima pelicula"]);

// mas detalles

personajes.edad = null;

console.log(personajes.edad);

console.log(personajes);

delete personajes.edad;     //borrar la propiedad edad

personajes.casado = true;   //si deseo agregar una nueva propiedad


const entriesPares = Object.entries(personajes);
    
console.log(entriesPares); //imprimirlos como un arreglo de posiciones

// console.log(personajes.edad);

Object.freeze(personajes);  //bloqueo de los objetos    
//solo bloquea los objetos directamente, los objetos que dependen de otros objetos no se pueden bloquear a menos que vuelva a 
//bloquearse el objeto de la propiedad usando el object.freeze

personajes.dinero = 10000000;

 console.log(personajes);

const propiedades = Object.getOwnPropertyNames(personajes);

console.log({propiedades});

const valores = Object.values(personajes);
 
console.log({propiedades, valores});





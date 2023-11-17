function crearPersona(nombre, apellido){
    return {
        nombre,apellido
        //nombre: nombre,
       // apellido: apellido se puede solictar el mismo nombre de la variable cuando se solicita como parametro
    }
}

const persona = crearPersona('mario', 'bros')

console.log(persona);

const crearPersona2=(nombre,apellido) => ({nombre,apellido})//el metodo retorna undefined
//el cuerpo de la funcion de flecha, se esta referenciando al objeto pero no esta regresando nada
//cuando se quiere enviar el objeto, se pone entre parentesis, lo que se quiere retornar es lo que esta
//entre parentesis
   // return {//se puede quitar las llaves y el return
        
    // }
// }

console.log(crearPersona2('adolfo','lora'));

function imprimeArgumentos() {
    console.log(arguments);
}

imprimeArgumentos(10,true,false,'concentrix', 'churchill');

const imprimeArgumentos2 = (...args) => {
    console.log(args);
    //la funcion flecha no permite llamar a los arguments, es solo para las funciones tradicionales,
    //para hacerlo posible, se utiliza la funcion ...args, parametros rest, si deseamos un argumento
    //(edad, ...args)
    //console.log({edad,args})
}

imprimeArgumentos2('mande',true,1,false, 'galerias');
//si deseamos imprimir alguna parte especifica del objeto lo hacemos de la suguiente manera

// const [casado, vivo, nombre, saludo, direccion] = imprimeArgumentos('giacomo',true, 2,true,'giacomo');
// console.log({casado,vivo, nombre,saludo, direccion});

const {apellido} = crearPersona ('fernando', 'valenzuela');
console.log({apellido});

//si deseas cambiar el nombre de la variable
//const { apellido: nuevoApellido} = crearPersona('fr','chi');
// console.log({nuevoApellido})


const tony = {
    nombre: 'tony stark',
    codeName: 'ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        long: -118.70
    },
    trajes: ['mark I', 'mark V', 'hulkbuster'],
};
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
const imprimePersonajes = (personaje) => {
    console.log(personaje.nombre);

}

imprimePersonajes(tony);

const imprimePropiedades = ({ nombre, codeName, vivo, edad, trajes}) => {
    edad = edad || 0;//en caso de que no exista la edad
//para evitar esto, se puede inicializar directamente desde la declaracion del parametro
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({trajes});

}
    imprimePropiedades(tony);
// }
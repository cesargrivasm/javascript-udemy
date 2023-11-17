// function saludar() {
//     console.log('hola mundo');

// }

// saludar();

function saludar(nombre){
    console.log(arguments);
    console.log('hola ' + nombre);
    // return 1;
}

const saludar2 = function(nombre){
    console.log('hola ' + nombre);
}

saludar('fernando',40,true, 'costa rica');
saludar2('cesar');

const saludarFlecha = () => {
    console.log('hola flecha');
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}

saludarFlecha();

saludarFlecha2('manolo');

const retornoSaludar= saludar('fernandp');

console.log(retornoSaludar);

function sumar(a, b){
    return a + b ;

}


console.log(sumar(4,9));

let suma = (a,b)=> {
    return a + b;
}

console.log(suma(4,5));

let suma2 = (a,b)=>a + b;

console.log(suma(2,3));


function getAleatorio(){
    return Math.random();
}

console.log(getAleatorio());

const getAleatorio2 = () =>  Math.random();


console.log(getAleatorio2());
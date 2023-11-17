let a = 5 ;

if(a < 10 ){
console.log('a es menor que 10');
}
else {
    console.log('a es mayor o igual a 10')
}
console.log('fin de programa');

const hoy = new Date();

console.log(hoy);

let dia = hoy.getDay();

console.log({dia});


// function diaLetras = () => {
//     a == 0 ? console('domingo') : 'no es domingo';
// }

// console.log(diaLetras(5));

dia = 4;
const diaLetras = {
    5: 'viernes',
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    6: 'sabado'
}

console.log(diaLetras[dia] || 'Dia no definido');

const diaLetras2 = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];

console.log(diaLetras2[dia]);


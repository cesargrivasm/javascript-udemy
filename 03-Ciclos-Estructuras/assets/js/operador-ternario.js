/*
Dias de la semana abrimos a las 11,
pero los fines de semana abrimos a las 9

entra en un sitio web, para consultar si esta abierto hoy

*/

const dia = 0;      //0: domingo... 1:Lunes....

const horaActual = 10;

let horaApertura;
let mensaje;        //esta abierto, esta cerrado, hoy abrimos a las XXXX

if( dia === 0 || dia === 6){
    //([0,6].includes(dia)) {//condicion alterna, si algo existe dentro de ese arreglo
    console.log('fin de semana');
    horaApertura = 9;
} else{
        console.log('dia de semana');
        horaApertura = 11;
}

if(horaActual >= horaApertura){
        mensaje = 'esta abierto';

} else {
    mensaje = `esta cerrado, hoy abrimos a las ${horaApertura}`;
}

console.log({ horaApertura}, mensaje);


// ******************

horaApertura = ( [0,6].includes(dia)) ? 9 : 11;

if(horaActual >= horaApertura) {
    mensaje = 'esta abierto';
} else {
    mensaje = `esta cerrado, hoy abrimos a las ${horaApertura}`;
}

mensaje = (horaActual >= horaApertura) ? 'esta abierto' : `esta cerrado, hoy abrimos a las ${horaApertura}`;

console.log({horaApertura, mensaje});


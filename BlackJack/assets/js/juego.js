/*
2C = two of clubs(treboles)
2H = two of hearts(corazones)
2D = two od diamonds(diamantes)
2S = two of spades(espadas)
*/

let deck    = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;
//referencias 
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');
const divCartasJugador= document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');

const crearDeck = () => {

for ( let i =2; i<= 10; i++){
    for(let tipo of tipos)
    {
    deck.push( i + tipo);
    }
}

// for ( let i =2; i<= 10; i++){
    for(let tipo of tipos)
    {
        for(let esp of especiales){
    deck.push( esp + tipo);
    }

}


// console.log(deck);
deck = _.shuffle(deck);
console.log(deck);
}



crearDeck();


// console.warn('testing');


// pedir carta 
const pedirCarta = () => {
    // let c = _.shuffle(deck);
    // //console.log(c);
    // c = deck.shift();

    
    //  console.log(c);
    // console.log(deck);
if(deck.length === 0){
    throw 'no hay cartas en el deck';
}

 const carta = deck.pop();
//  console.log(deck);
//  console.log(carta);
 return carta;


}

// deck = [];


// pedirCarta();

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    // let puntos = 0;
    // // console.log({ valor});
   
    // if(isNaN( valor)) {
    //     // console.log('no es un numero');
    //     puntos = (valor === 'A') ? 11 : 10;
    // } else {
    //     // console.log('es un numero');
    //     puntos = valor * 1;
    // }
    // console.log(puntos);

    return (isNaN(valor)) ?
            (valor === 'A') ? 11 : 10
            : valor * 1;


}

//turno de la computadora

const turnoComputadora = (puntosMinimos) => {
    do{
    const carta =pedirCarta();

    puntosComputadora = puntosComputadora + valorCarta ( carta);
    puntosHTML[1].innerText = puntosComputadora;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasComputadora.append(imgCarta);

    if(puntosMinimos > 21){
        break;
    }

    // if(puntosJugador > puntosComputadora){
    //     alert('has ganado');
    // }

} while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

setTimeout(() => {
    if( puntosComputadora === puntosMinimos) {
        alert('nadie gana...');
    } else if( puntosMinimos > 21){
        alert('computadora gana');
    } else if( puntosComputadora > 21){
        alert('jugador gana');
    } else {
        alert('computadora gana');
    }


}, 10);
}

// const valor = valorCarta('AD');
// console.log({ valor });


// eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    // console.log(puntosJugador);
    puntosHTML[0].innerText = puntosJugador;

const imgCarta = document.createElement('img');
imgCarta.src = `assets/cartas/${ carta }.png`;
imgCarta.classList.add('carta');

divCartasJugador.append( imgCarta);


if(puntosJugador > 21){
    console.warn('lo siento mucho, perdiste');
    // alert('computadora gano..');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
}

else if(puntosJugador === 21){
    console.warn('21, genial');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
    // alert('ganaste');
}

});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugador);
});

btnNuevo.addEventListener('click', () =>  {

    console.clear();

    deck = [];

    deck=crearDeck();

    puntosJugador = 0;
    puntosComputadora = 0;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled = false;
    btnDetener.disabled = false;


})

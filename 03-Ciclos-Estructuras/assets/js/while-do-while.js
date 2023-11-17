
const carros = ['ford','mazda', 'honda', 'toyota'];
let i =0;

console.warn('while');

while ( i< carros.length) {
    console.log(carros[i]);
    i++;
}

console.warn('segunda toma');

while(carros[i]) {
    console.log(carros[i]);
    i++;
}

// })



// 08:20

console.warn('do-while');
let j = 0;

do {
    console.log(carros[j]);
    j++;

}while(carros[j]);


const heroes = ['batman', 'superman', 'mujer maravilla', 'aquaman'];

for(let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
}

console.warn('for in');

for(let i in heroes){
    console.log(heroes[i]);

}


console.warn('for of');

for( let heroe of heroes){//se usa en singular del arreglo
    console.log(heroe);
}
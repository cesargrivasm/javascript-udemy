console.log('hola mundo..')

const superHeroes = [
    {
id : 1,
name: 'batman'
    },
    {
        id: 2,
        name: 'superman'
    },
    {
        id: 3,
        name: 'flash'
    },
    {
        id: 4,
        name: 'aquaman'
    },
];


console.table(superHeroes);

const superHeroesCopy = structuredClone(superHeroes);

superHeroesCopy[0].name = 'green lantern';

console.table(superHeroesCopy);


import {heroes} from '../../data/heroes'

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const promiseComponent = ( element ) => {

   const renderHero = ( hero ) =>{
    element.innerHTML = hero.name;
   }

   const renderTwoHeroes = ( hero1, hero2) => {
    element.innerHTML = `
    <h3>${ hero1.name }</h3>
    <h3>${ hero2.name }</h3>
    `;
   }

   const renderError = ( error ) => {
    element.innerHTML = `
    <h1>Error: </h1>
    <h3>${ error }</h3>
    `
   }
     
   const id1 = '5d86371f2343e37870b91ef1';
   const id2 = '5d86371f233c9f2425f16916';

//cuando solicitamos ambas promesas de manera simultanea, si depende una de la otra, usamos la opcion 2
Promise.all([
    findHero(id1),
    findHero(id2),
])
.then(  ([hero1, hero2]) => renderTwoHeroes( hero1, hero2) )
.catch( renderError );


   // ! forma 2


//    let hero1;

//    findHero(id1)
//    .then( hero => {
//     hero1 = hero;
//     return findHero(id2);
//    }).then ( hero2 => {
//     renderTwoHeroes( hero1, hero2);
//    })
//    .catch ( renderError );


   //!forma 1
//    let hero1,hero2;

//    findHero( id1 )
//    .then( (hero1) => {
       

//         findHero( id2 )
//         .then( hero2 => {
//             renderTwoHeroes(hero1, hero2)
//         })
//         .catch ( renderError );
//    })
//    .catch(renderError );
   
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<Object>}
 */
const findHero = ( id ) => {

    return new Promise(( resolve, reject ) => {
    
        const hero = heroes.find( hero => hero.id === id);

        if( hero ){
            resolve( hero );
            return;
        }

        reject(`hero with ${ id } not found`);
     });  

    //  return promise;
}
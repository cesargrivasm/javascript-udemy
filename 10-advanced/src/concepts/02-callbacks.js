/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../../data/heroes"

export const callbacksComponent = ( element ) => {

//     console.log('callbacksComponent')
// }
const id = 'd86371f9f80b591f499df32';
findHero( id , (hero) => {
    element.innerHTML = hero.name;

});
}

/**
 * 
 * @param {string} id 
 * @param {(hero: Object) => void} callback 
 */
const findHero = (id, callback) => {
    const hero = heroes.find( hero => hero.id ==id );

    callback( hero );
}

/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../../data/heroes"

export const callbacksComponent = ( element ) => {

//     console.log('callbacksComponent')
// }
const id1 = 'd86371f9f80b591f499df3';
const id2= '5d86371f25a058e5b1c8a65e';

findHero( id1 , (error, hero1) => {

    // element.innerHTML = hero?.name || 'no hay heroe';

    if(error){
        element.innerHTML = error;
        return;
    }

    findHero( id2 , (error, hero2) => {

        // element.innerHTML = hero?.name || 'no hay heroe';
    
        if(error){
            element.innerHTML = error;
            return;
        }

    element.innerHTML = `${ hero1.name}/ ${hero2.name}`;

})
});
}
/**
 * 
 * @param {string} id 
 * @param { (error: String|Null, hero: Object)=> void} callback 
 */
const findHero = (id,callback) => {
    const hero = heroes.find( hero => hero.id ==id );

    if(!hero){
        callback(`Hero with id ${ id } not found.`);
        return;
    }

    callback( null, hero );
}


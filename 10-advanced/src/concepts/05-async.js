/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../../data/heroes"

export const asyncComponent = ( element ) => {

    // console.log('asyncComponent')

    const id1 = '5d86371f97c29d020f1e1f6d';
    console.log('inicio de componente')

   findHero ( id1 )
   .then( name => element.innerHTML = name)
   .catch ( error => element.innerHTML = error)
   
   console.log('fin del componente..');
}

/**
 * 
 * @param {String} id 
 * @returns { Promise<String>}
 */
const findHero = async (id) => {
    const hero = heroes.find( hero => hero.id === id );
    if( !hero )
        throw `Hero with ${ id } not found`;
    return hero.name;

}
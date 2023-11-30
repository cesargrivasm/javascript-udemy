/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../../data/heroes"

export const asyncAwait2Component = async( element ) => {

    console.log('start');

    // const value1 = await slowPromise();
    // const value2 = await mediumPromise();
    // const value3 = await fastPromise();
     const [value1,value2, value3] = await Promise.all([
            slowPromise(),
            mediumPromise(),
            fastPromise(),
     ]);

    element.innerHTML = `
    value1: ${ value1 }<br/>
    value2: ${ value2 }<br/>
    value3: ${ value3 }<br/>
    `;
    
    console.timeEnd('start');
    
}

const slowPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('slow promise');
    }, 2000);
});

const mediumPromise = () =>new Promise ( resolve => {
    setTimeout(() => {
        resolve('medium promise');
    }, 1500);
});

const fastPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('fast promise');
    }, 1000);
});

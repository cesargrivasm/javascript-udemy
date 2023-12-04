/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../../data/heroes"

export const generatorFunctionsComponent = ( element ) => {

    // console.log('generatorFunctionsComponent')

    // 
    const myGenerator = myFirstGeneratorFunction();
    
    // console.log( myGenerator.next() );
    // console.log( myGenerator.next() );
    // console.log( myGenerator.next() );
    // console.log( myGenerator.next() );  
    // console.log( myGenerator.next() );
    // console.log( myGenerator.next() );

    const genId = idGenerator();

    // console.log( genId.next() );

    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append( button );

    const renderButton =() =>{
        const { value } = genId.next();
        button.innerText = `Click ${ value }`;
    }

        button.addEventListener('click', renderButton);
}
    function* idGenerator() {
        let currentId = 0;
        while(true){
            yield ++currentId;
        }
    }



function* myFirstGeneratorFunction() {
    yield 'primer valor';
    yield 'segundo valor';
    yield 'tercer valor';
    yield 'cuarto valor';

    return 'ya no hay valores';
    yield ' ya o pueden hacer nada'
}
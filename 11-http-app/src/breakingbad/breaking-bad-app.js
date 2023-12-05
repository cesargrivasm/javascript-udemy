/**
 * @returns { Promise<Object> } quote information<promise> any
 */

const fetchQuote = async() => {
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    // console.log( res);
    const data = await res.json;

    console.log(data[0]);
    return data[0];
}
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async( element ) => {
    // console.log('hola mundo');

    document.querySelector('#app-title').innerHTML = 'Breaking-Bad app';
    element.innerHTML = 'Loading...';

    const  quote = await fetchQuote();


}
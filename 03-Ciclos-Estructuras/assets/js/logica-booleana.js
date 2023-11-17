const regresaTrue =() => {
    console.log('regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('regresa false');
    return false;
}

console.warn ('not o la negacion');

console.log(true); //true

console.log(!true);//true

console.log(!false);//true

console.log(!regresaTrue());

console.log(!regresaFalse());

console.warn('and');

console.log( true && true );

console.log(false && !false);


console.log('==================');

console.log(regresaFalse() && regresaTrue());

console.log(regresaTrue() && regresaFalse());

console.warn('or logical or ');

console.log(true || false);

console.log(false || false);

console.log(regresaTrue() || regresaFalse());


console.warn('asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;


const a1 = true && 'hola mundo' && 150;

console.log({a1,})

const a2 = 'hola' && 'mundo';

console.log({a2, })

const a3 = soyFalso || 'ya no soy falso';

console.log({a3, });


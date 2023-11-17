
const elMayor = (a,b) => {
    return (a > b) ? a : b;
}

console.log(elMayor(5,3));

const elMayor2 = (a,b) => (a>b) ? a : b;

console.log(elMayor2(15,20));

const tieneMebresia = ( miembro) => (miembro) ? '2 dolares' : '10 Dolares';

console.log(tieneMebresia(true));

const amigo = true;

const amigosArr = [
    'peter',
    'tony',
    'Dr. Strange',
    amigo ? 'thor' : 'loki'
]

console.log(amigosArr);

 const nota = 95;
 
 const grado = nota >= 95 ? 'A+' :
               nota >= 90 ? 'A'  :
               nota >= 85 ? 'B+' :
               nota >= 80 ? 'C+' :
               nota >= 75 ? 'C+' : 
               nota >= 70 ? 'C'  : 'F';

console.log({nota,grado});

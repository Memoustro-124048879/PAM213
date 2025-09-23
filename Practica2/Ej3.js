const personas = [
    {nombre: 'Ana', edad: 22},
    {nombre: 'Luis', edad: 35},
    {nombre: 'María', edad: 28}
];

const nom= personas.find(personas=>personas.nombre==='Luis');
console.log(nom);

console.log('');
personas.forEach(personas=>{console.log(personas)});

console.log('');
const SumEd=personas.reduce((resultado, personas) => resultado+personas.edad,0);
console.log(SumEd);
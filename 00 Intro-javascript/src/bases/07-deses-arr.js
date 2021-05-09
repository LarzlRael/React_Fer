
// Array Destructuring
const personajes = ['Goku', 'Vegeta', 'Trunks'];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

//First element
const [p1] = personajes;

//Second element

const [, p2] = personajes;


//Third element
const [, , p3] = personajes;

const returnArray = () => {
    return ['ABC', 123];
}

const [letters, numbers] = returnArray();
console.log(letters, numbers);

const usarEstado = (valor) => {
    return [valor, () => { console.log('Hola mundo') }]
}

// Homework print to console 
//1. el primer valor del arr se llamara nombre
//2. se llamara setNombre

const [nombre, setNombre] = usarEstado('Goku');
console.log(nombre);
setNombre();

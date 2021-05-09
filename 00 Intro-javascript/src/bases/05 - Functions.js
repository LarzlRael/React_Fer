// ! functions 

//? normal way | do not use
function Saludar(nombre) {
    return `Hola ${nombre}`;
}
//? second way 
const saludar2 = function S(nombre) {
    return `Hola ${nombre}`;
}

//? third way use recommend
//? arrow function

const saludar3 = (name) => `Hello ${name}`;


console.log(saludar3('Goku'))

const getUser = () => (
    {
        uid: 'ABD123',
        name: 'El papi xd'
    }
);

console.log(getUser());

//Tarea
//? 1. Transform to arrow function
//? 2. return a implicit object
//? 3. Pruebas
// function getActiveUser(nombre){
//     return {
//         uuid:'abd123',
//         username:nombre
//     }
// }

const getActiveUser = (nombre) =>(
        {
            uuid: 'abd123',
            username: nombre
        }
    )

const usuarioActivo = getActiveUser('larz');
console.log(usuarioActivo);
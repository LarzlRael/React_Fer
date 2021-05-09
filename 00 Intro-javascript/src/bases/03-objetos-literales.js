// literals objects

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        city: 'New York',
        zip: 78347873474,
        lat: 14.3232,
        lng: 34.9595
    }
};
// if the key is equal to value, just put one variable name
// in the browser will see en alphabetic order
console.log(persona);
// see in table form
console.table(persona);

//? create a copy to variable persona
const persona2 = {...persona};

console.log(persona2);

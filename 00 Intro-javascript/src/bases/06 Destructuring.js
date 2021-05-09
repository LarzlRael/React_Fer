//? destructuring
const persona = {
    name: 'Tomny',
    age: 45,
    key: 'Ironman'
};

// old way
console.log(persona.name);
console.log(persona.age);
console.log(persona.key);

// using destructuring
const { name, age, key } = persona;
console.log(name, age, key);

const returnPerson = (user) => {
    const { name, age, key } = user;
    console.log(name, age, key);
}
// destructuring objets from parameters
const returnPerson2 = ({ name, age, key }) => {
    console.log(name, age, key);
}

returnPerson2(persona);

const context = ({ key, name, age, rank }) => {

    return {
        nombreClave: key,
        year: age,
        latlng: {
            lat: 14.12212,
            lng: -12.25

        }
    }
}

//Segund level to destructuring 
//  nested destructuring
const { nombreClave, year, latlng: { lat, lng } } = context(persona);

console.log(nombreClave, year);
console.log(lat, lng);
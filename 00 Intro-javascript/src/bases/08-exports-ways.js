import { heroes } from '../data/heros';

export const getHeroeById = (id) => 
    heroes.find((hero) => hero.id === id)

console.log(getHeroeById(3))

const getHeroesByOwner = (owner) => 
    heroes.filter((hero) => hero.owner === owner)

// test the result 
//console.log(getHeroesByOwner('Marvel'));
import { getHeroeById } from "./bases/08-exports-ways";


//* promises

// it had 2 parameteres the resolve and the reject where the error falls 
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // console.log('2 Segundos Despues')
//         // Tasks 1. Import the getHeroByid function
//         // set in a variable and print with the console.log
//         const hero = getHeroeById(20);
//         //console.log(hero);
//         //? the parameter will to pass to then
//         resolve(hero);

//         reject('the hero is not found')

//     }, 2000);
// });


// promise.then((hero) => {
//     console.log('hero', hero);
// })
//     .catch(err => console.warn(err))


const getHeroByidAsync = (id) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log('2 Segundos Despues')
            // Tasks 1. Import the getHeroByid function
            // set in a variable and print with the console.log
            const hero = getHeroeById(id);
            //? the parameter will to pass to then
            if (hero) {
                resolve(hero);
            } else {
                reject('the hero is not found')
            }

        }, 2000);
    });
    return promise;
}

getHeroByidAsync(4)
    // other way is simply just the console.war or the console.log
    //(hero => console.log('Hero', hero))
    .then(console.log)
    .catch(console.warn)
import { getHeroeById, getHeroesByOwner } from "../../../base-pruebas/08-imp-exp";
import heroes from "./heroes";
heroes


describe('Testing in heros functions', () => {

    test('should be return a hero by id', () => {
        const id = 1;
        const hero = getHeroeById(id);

        console.log(hero)

        const heroData = heroes.find(h => h.id === id);

        expect(hero).toEqual(heroData);
    })

    test('should be return undefind if hero does not exist', () => {
        const id = 10;
        const hero = getHeroeById(id);


        expect(hero).toEqual(undefined);
    })

    // should return an array with the dc heroes

    test('should return an array with the dc heroes', () => {
        const id = 10;
        const hero = getHeroeById(id);


        expect(hero).toEqual(undefined);
    });

    // should return an array with the Marvel heroes (there are two)

    test('should return an array with the Marvel heroes (there are two)', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
    })
    // should return an array with the Marvel heroes
})

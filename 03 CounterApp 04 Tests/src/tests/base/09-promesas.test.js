import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "./data/heroes";


describe('Test with promises', () => {
    test('getHeroeByIdAsync should be return a hero', (done) => {

        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                //use done callback for asicronus tasks
                done();
            })
    })
    test('it must get a error if the hero doesnt exists', (done) => {

        const id = 10;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            })
    })
});

//toStrictEqual

import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"

describe('05 functions', () => {
    test('getuser must return an object ', () => {
        const user = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const usertest = getUser();

        console.log(usertest);

        // to compare the same properties user toStrictEqual
        expect(user).toStrictEqual(usertest);
    });

    // getuserActibe must return a object 
    test('getuserActibe must return a object ', () => {

        const name = 'Juan';
        const user = getUsuarioActivo(name);

        // to compare the same properties user toStrictEqual
        expect(user).toEqual({
            uid: 'ABC567',
            username: name
        })
    });

})
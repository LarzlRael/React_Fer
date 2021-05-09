// first test file 
// all code is js

// first argument is the name test
// secund para parameter is a callback

// test('should be true ', () => {
//     const isActive = true;
//     if (isActive) {
//         throw new Error('No esta activo')
//     }
// })



//? the describe function is for grouping tests
describe('Testing en the demo.test.js', () => {
    test('the string must be equals ', () => {

        //1. Inicialitation
        const mensaje = 'Hola mundo';

        //3. stimulus

        const mensaje2 = 'Hola mundo';

        expect(mensaje).toBe(mensaje2);
    })
})



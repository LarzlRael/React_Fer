import { getSaludo } from "../../base-pruebas/02-template-string"


describe('Pruebas de al 02 string ', () => {
    test('must be return hello + name ', () => {

        const name = 'Larz';
        const greetings = getSaludo(name);
        expect(greetings).toBe('Hola '+name)
    })

    test('must be return hello + name for default ', () => {
        
        
        const greetings = getSaludo();
        expect(greetings).toBe('Hola '+'Carlos!')
    })
        
})

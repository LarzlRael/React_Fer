
// testing with the async await promises
import { getImagen } from "../../base-pruebas/11-async-await"

describe('Testint with async and await Fetch', () => {
    test('should return the request url iamge', async () => {
        const url = await getImagen();

        expect(typeof url.includes('https://')).toBe('string');
    })

})

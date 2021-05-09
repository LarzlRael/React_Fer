import { getGifs } from '../../helpers/getGifs';

describe('Testing with GetGifs Fetch', () => {
    test('should bring 10 elements', async () => {
        const gifs = await getGifs('Naruto');
        expect(gifs.length).toBe(10);
    })

})

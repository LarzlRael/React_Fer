import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from '@testing-library/react-hooks'
describe('Testing in useFetchHook hook', () => {

    test('should return the initial state', async () => {

        // doest work
        //const {data:images,loading} = useFetchGifs('One piece');

        //  const resp = renderHook(() => useFetchGifs('One piece'));
        // using the destructurin 
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One piece'));

        
        const { data, loading } = result.current;
        
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);

    })

    test('should return an imagen array and loading shuold be false', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One piece'));

        await waitForNextUpdate();

        const { data, loading } = result.current;

        console.log(data, loading);

        expect(data.length).toEqual(10);

        expect(loading).toBe(false);
    })


})

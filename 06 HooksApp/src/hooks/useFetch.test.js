import { renderHook } from "@testing-library/react-hooks"
import { useFetch } from "./useFetch"


describe('Testing use fetch hook', () => {

    test('should return the default info', () => {

        const { result } = renderHook(() => useFetch(`https://www.breakingbadapi.com/api/quotes/1`));

        const { data, loading, error } = result.current;
        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
    })

    test('should has must have the desired information, loading false, error false', async () => {


        const { result, waitForNextUpdate } = renderHook(() => useFetch(`https://www.breakingbadapi.com/api/quotes/1`));

        await waitForNextUpdate({timeout:2000});

        const { data, loading, error } = result.current;

        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);

    });


    test('must handle the error', async () => {


        const { result, waitForNextUpdate } = renderHook(() => useFetch(`https://reqres.in/apid/users?page=2`));

        await waitForNextUpdate({timeout:3000});

        const { data, loading, error } = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('No se pudo cargar la info prro');

    })


})

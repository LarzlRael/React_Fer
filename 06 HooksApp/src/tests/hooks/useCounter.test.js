
import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter } from '../../hooks/useCounter';

describe('Testing in useCounter', () => {

    test('should return default values', () => {

        const { result } = renderHook(() => useCounter());


        console.log(result.current)

        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function')
        expect(typeof result.current.decrement).toBe('function')
        expect(typeof result.current.reset).toBe('function')

    })

    test('should increment the counter in +1 ', () => {

        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;

        // for testing functions hooks

        act(() => {
            increment();
        })

        const { counter } = result.current;
        expect(counter).toBe(101);

    });

    test('should decrement the counter in -1 ', () => {

        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;

        // for testing functions hooks

        act(() => {
            decrement();
        })

        const { counter } = result.current;
        expect(counter).toBe(99);

    })

    test('should reset the result by default', () => {

        const { result } = renderHook(() => useCounter(100));
        const { increment,reset } = result.current;

        // for testing functions hooks

        act(() => {
            increment();
            reset();
        });

        const { counter } = result.current;
        expect(counter).toBe(100);

    })

})

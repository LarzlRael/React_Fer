import { renderHook, act } from '@testing-library/react-hooks'
import { useForm } from './useForm'

describe('Testing in useForm hook', () => {
    const initialForm = {
        name: 'Larz',
        email: 'Larz@gmail.com'
    }

    test('should return a form by default', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [formValues, handleInputChange, reset] = result.current;


        expect(formValues).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');

    });

    test('should change the value of the form (change name)', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Melissa'
                }
            })
        });

        const [formValues] = result.current

        expect(formValues).toEqual({ ...initialForm, name: 'Melissa' });


    })

    test('should reset the form using the RESET', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange,reset] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Melissa'
                }
            })
            reset();
        });

        const [formValues] = result.current

        expect(formValues).toEqual(initialForm);



    });


})

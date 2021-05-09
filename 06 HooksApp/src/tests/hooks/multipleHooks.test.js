import React from 'react';
import { shallow } from 'enzyme';
import MultipleCustomHooks from '../../componentes/03-examples/MultipleCustomHooks';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

jest.mock('../../hooks/useFetch');
// jest.mock('../../hooks/useCounter');



describe('Testing in <MultipleCustomHooks />', () => {

    // useCounter.mockReturnValue({
    //     counter: 10,
    //     increment:() => {} 
    // })


    test('should display correctly', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks />)
        expect(wrapper).toMatchSnapshot();
    });

    test('should display the information', () => {

        const mensaje = 'hola mundo';
        useFetch.mockReturnValue({
            data: [{
                author: 'larz',
                quote: mensaje
            }],
            loading: false,
            error: null

        })

        const wrapper = shallow(<MultipleCustomHooks />)

        console.log(wrapper.html())
        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe(mensaje);
        expect(wrapper.find('footer').text().trim()).toBe('larz');


    })


})



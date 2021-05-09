import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../AddCategory';

describe('Testing in <AddCategory />', () => {

    // simulate function from jst
    const setCategories = jest.fn();

    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        // clear all the Mocks
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('should show correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });


    test('should change the textbox', () => {
        const input = wrapper.find('input');
        const value = 'Hello word';

        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe(value);
    });


    test('should not post the information after submit', () => {

        // simulate the submit event
        wrapper.find('form').simulate('submit', { preventDefault() { } })

        // if the function has been called
        expect(setCategories).not.toHaveBeenCalled();
    });


    test('should the call setCategroies and clear the textbox', () => {
        // 1. Simulate the inputChange
        // 2. Simulate the submit
        // 3. The function setCategories should call
        // 4. The input value should be ''

        const value = 'hello world';
        //1. Simulate the inputChange
        wrapper.find('input').simulate('change', { target: { value } }
        );

        //2. Simulate the submit
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        // 3. The function setCategories should call
        expect(setCategories).toHaveBeenCalled();
        // expect the number times calls function
        expect(setCategories).toHaveBeenCalledTimes(1);
        // exṕect setCategories be a function
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        // 4. The input value should be ''
        expect(wrapper.find('input').prop('value')).toBe('');

    });

    


})

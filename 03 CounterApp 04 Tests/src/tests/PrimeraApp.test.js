// import { render } from "@testing-library/react";
// import React from 'react';

import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';
import PrimeraApp from "../PrimeraApp";

// describe('Testing in <PrimeraApp />', () => {

//     test('Debe mostrar el mensaje de hola soy Goku', () => {

//         const saludo = 'Hola Soy Goku';

//         const { getByText } = render(<PrimeraApp saludo={saludo} />);


//         expect(getByText(saludo)).toBeInTheDocument();

//     });

// });

describe('Testing in <PrimeraApp />', () => {

    // test('Debe mostrar el mensaje de hola soy Goku', () => {

    //     const saludo = 'Hola Soy Goku';

    //     const wraper = shallow(<PrimeraApp saludo={saludo} />);

    //     expect(wraper).toMatchSnapshot();
    // });

    let wrapper = shallow(<CounterApp />);

    // initialize components
    beforeEach(() => {
        wrapper = shallow(<CounterApp />); 
    })


    test('should show the subtitle sended by properties', () => {

        const saludo = 'Hola Soy Goku';
        const subTitulo = 'Soy un subtitulo';

        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subTitulo}
            />
        );

        //Find paragraph element in wrapper or the PrimerApp
        const textParagraph = wrapper.find('p').text();
        //in textParagraph find the text inside the paragraph
        expect(textParagraph).toBe(subTitulo);

    });


    test('should be testing CounterApp', () => {

        const value = 1;

        const wraper = shallow(<CounterApp value={value} />);

        expect(wraper).toMatchSnapshot();
    });


    test('must show by default value in CounterApp', () => {

        const defaultValue = 100;
        const wrapper = shallow(
            <CounterApp value={100} />
        );

        //Find paragraph element in wrapper or the PrimerApp
        const headTwo = wrapper.find('h2').text().trim();
        //in textParagraph find the text inside the paragraph
        expect(headTwo).toBe(defaultValue);

    });

    test('must increment counter +1', () => {

        // first button HandleAdd
        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();
        console.log(counterText);
        expect(counterText).toBe('11');

    });

    test('must decrease counter -1', () => {

        // third button HandleAdd
        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text().trim();
        console.log(counterText);
        expect(counterText).toBe('9');

    });
    test('Should be set defualt value', () => {

        const wrapper = shallow(
            <CounterApp value={105} />
        );
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');


        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();
        console.log(counterText);
        expect(counterText).toBe('105');
    });



});


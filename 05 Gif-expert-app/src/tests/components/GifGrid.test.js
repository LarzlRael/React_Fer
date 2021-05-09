import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Testing in <GifGrid /> component', () => {

    const category = 'One punch';

    test('should mostrar correctly', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });


        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot();
    });

    test('should show items when the imagenes are loaded', () => {

        const gifs = [
            {
                id: 'abc',
                url: 'localhost',
                title: 'anything'
            },
            {
                id: 'cde',
                url: 'localhost:8080',
                title: 'anything here'
            },
        ];


        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        // supose there is information
        const wrapper = shallow(<GifGrid category={category} />)


        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);


    });


})


import { shallow } from 'enzyme';
import React from 'react';
import HookApp from '../HookApp';


describe('Testing in <HoopApp/ >', () => {

    test('should display correctly', () => {

        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
        
    })
    
})

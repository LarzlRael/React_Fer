import React from 'react';
import { shallow } from "enzyme"
import GitExportApp from "../../GitExportApp";


describe('Testing the git Expert App Component', () => {

    const wrapper = shallow(<GitExportApp />)
    test('should show correctly the component with props', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('should to show a category list items', () => {

        const categories = ['One Punch', 'Dragon Ball'];

        const wrapper = shallow(<GitExportApp defaultCategories={categories} />)

        // Expect gifGrid return the same length
        expect(wrapper.find('GifGrid').length).toBe(categories.length);



    });
})

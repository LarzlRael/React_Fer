import { shallow } from "enzyme"
import GifGridItem from "../../components/GifGridItem";



describe('Testing in <GifGridItem />', () => {

    const title = 'Un titulo';
    const url = 'https://localhost:8080';

    const wrapper = shallow(
        <GifGridItem
            title={title}
            url={url}
        />);

    test('should show correctly the component with props', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('It must have a paragraph with a title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
        expect(wrapper).toMatchSnapshot();
    })

    test('It must have the image by the url and the alt by props', () => {
        const img = wrapper.find('img');
        // find the tag properties
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('It must have animate_fadeIn', () => {

        const div = wrapper.find('div');
        // get the className 
        const className = div.prop('className');

        // if class name it must have the class name is true o false
        expect(className.includes('animate__fadeIn')).toBe(true);
    })
})

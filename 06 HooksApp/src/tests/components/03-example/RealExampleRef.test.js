const { shallow } = require("enzyme");
const { default: RealExampleRef } = require("../../../componentes/04-useRef/RealExampleRef");

describe('Test in <RealExample />', () => {

    const wrapper = shallow(<RealExampleRef />);

    test('should display correctly', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    });

    test('should display the component <RealExampleRef />', () => {

        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    })


})

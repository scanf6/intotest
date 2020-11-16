import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr, checkProps } from '../../testUtils';
import InputWord from './index';


let defaultProps = {
    success: false
}
/**
 * Setup function for InputWord
 * @param {object} props - The props of the components
 * @returns {ShallowWrapper} - A Wrapper of our rendered element
 */
function setup(props) {
    let componentProps = {...defaultProps, ...props}
    let wrapper = shallow(<InputWord {...componentProps} />);
    return wrapper
}

describe('InputWord Component', ()=>{
    let component;

    it('Should not render if the word was guessed correctly', ()=>{
        component = setup();
        let wrapper = findByTestAttr(component, 'input-component');
        expect(wrapper.length).toBe(0);
    });

    it('Should render if the word is not correctly guessed yet', ()=>{
        component = setup({ success: true });
        let wrapper = findByTestAttr(component, 'input-component');
        expect(wrapper.length).toBe(1)
    })
})
import { shallow, ShallowWrapper , mount} from 'enzyme';
import { findByTestAttr, testStore } from '../../testUtils';
import InputWord from './index';


let defaultProps = {
    success: false
}
/**
 * Setup function for InputWord
 * @param {object} props - The props of the components
 * @returns {ShallowWrapper} - A Wrapper of our rendered element
 */
function setup(initialState={}) {
    const store = testStore(initialState);
    let wrapper = shallow(<InputWord store={store} />).childAt(0).dive();
    return wrapper
}

describe('InputWord Component', ()=>{
    let component;

    it('Should render if the word was not guessed correctly', ()=>{
        component = setup();
        let wrapper = findByTestAttr(component, 'input-component');
        expect(wrapper.length).toBe(1);
    });

    it('Should not render if the word is guessed correctly', ()=>{
        component = setup({ success: true });
        let wrapper = findByTestAttr(component, 'input-component');
        expect(wrapper.length).toBe(0)
    });

    it('Should render the submit button when the word is not yet guessed', ()=>{
        component = setup();
        let button = findByTestAttr(component, 'input-button');
        expect(button.length).toBe(1);
    });

    it('Should update the redux state and add a guessed word when the submit button is clicked', ()=>{

    })

    it('Should not change anything in the store if there are no guessed words in the field and the submit button is clicked', ()=>{

    })
})
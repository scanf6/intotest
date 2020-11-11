import React from 'react';
import Counter from '../components/Counter';
import { shallow } from 'enzyme';

function setup() {
  let wrapper = shallow(<Counter />);
  return wrapper;
}

function findByTestAttr(wrapper, attribute) {
  return wrapper.find(`[data-test='${attribute}']`);
}

describe('Counter Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  it('Should render without errors', () => {
    let counter = findByTestAttr(wrapper, 'counterComponent');
    expect(counter.length).toBe(1);
  });

  it('Should render the button without errors', () => {
    const button = findByTestAttr(wrapper, 'buttonCounter');
    expect(button.length).toBe(1);
  });

  it('Should display 0 as starting count', ()=>{
    const span = findByTestAttr(wrapper, 'count');
    const text = span.text();
    expect(text).toBe('0');
  });

  it('Should increment state when button is clicked', () => {
    const button = findByTestAttr(wrapper, 'buttonCounter');
    const counterInstance = wrapper.instance();
    button.simulate('click');
    expect(counterInstance.state.count).toBe(1);
  });
});

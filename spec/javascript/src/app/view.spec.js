import React from 'react';
import { shallow } from 'enzyme';
import { Navbar } from 'react-bootstrap';
import View from 'src/app/view';  

describe('View component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<View />);

    expect(wrapper).toMatchSnapshot();
  });

  it('contains the proper title', () => {
    const wrapper = shallow(<View />);

    expect(wrapper.find(Navbar.Brand).text()).toBe('Simple Rails / React App')
  });
});
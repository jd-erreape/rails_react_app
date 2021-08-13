import React from 'react';
import { shallow } from 'enzyme';
import { Navbar } from 'react-bootstrap';
import App from 'src/app';  

describe('App component', () => {
  describe('contains Navbar Brand', () => {
    it('matches snapshot', () => {
      const wrapper = shallow(<App />);

      expect(wrapper).toMatchSnapshot();
    });

    it('contains the proper title', () => {
      const wrapper = shallow(<App />);

      expect(wrapper.find(Navbar.Brand).text()).toBe('Simple Rails / React App')
    });
  });
});
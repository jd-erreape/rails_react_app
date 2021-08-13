import React from 'react';
import { shallow } from 'enzyme';
import HelloReact from 'packs/hello_react';

describe('HelloReact component', () => {
  describe('when a name is given as a prop', () => {
    it('render Hello Juande!', () => {
      expect(shallow(<HelloReact name="Juande"/>).text()).toBe('Hello Juande!')
    });
  });

  describe('when no name is given', () => {
    it('render Hello David!', () => {
      expect(shallow(<HelloReact />).text()).toBe('Hello David!');
    });
  });
});
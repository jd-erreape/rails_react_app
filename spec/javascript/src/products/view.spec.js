import React from 'react';
import { shallow } from 'enzyme';
import { Table } from 'react-bootstrap';
import View from 'src/products/view';  

const products = [
  {
    code: 'CD1',
    name: 'Product1',
    price: 100,
  },
  {
    code: 'CD2',
    name: 'Product2',
    price: 200,
  },
];

describe('View component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<View products={products} />);

    expect(wrapper.dive()).toMatchSnapshot();
  });

  it('contains proper number of products', () => {
    const wrapper = shallow(<View products={products} />);

    expect(wrapper.find('tbody tr').length).toBe(2)
  });
});
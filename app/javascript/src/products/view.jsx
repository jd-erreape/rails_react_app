import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

const View = ({ products }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Code</th>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {
        products.map((product) => (
          <tr key={product.code}>
            <td>{product.code}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        ))
      }
    </tbody>
  </Table>
);

View.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
};

View.defaultProps = {
  products: [],
};

export default View;
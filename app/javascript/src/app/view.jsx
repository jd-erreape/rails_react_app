
import React from 'react'
import { Container, Navbar, Row, Col } from 'react-bootstrap';
import Products from '../products';

export default () => (
  <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Simple Rails / React App</Navbar.Brand>
      </Container>
    </Navbar>
    <Container>
      <Row>
        <Col sm={8}><Products /></Col>
        <Col sm={4}>sm=4</Col>
      </Row>
    </Container>
  </>
);
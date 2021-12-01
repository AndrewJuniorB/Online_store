import React from 'react';
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TypeBar from '../components/TypeBar.js';
import BrandBar from '../components/BrandBar.js';
import {observer} from 'mobx-react-lite'

const Shop = observer(() => {
  return (
    <Container>
      <Row>
        <Col md={3} >
          <TypeBar/>
        </Col>


        <Col md={9} className="d-inline-block">
          <BrandBar/>
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
import React, {useContext} from 'react';
import { observer } from 'mobx-react-lite';
import {Context} from '../index.js';
import {Row, Card, Col} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const BrandBar = observer(() => {
  const {device} = useContext(Context);
  return(
  <Row className='d-flex mt-2'>
      {device.brands.map(brand =>
      <Col md={2}>
        <Card
        key={brand.id}
        style={{cursor:'pointer'}}
        className='p-3'
        border={brand.id === device.selectedBrand.id ? 'primary' : 'light'}
        onClick={() => device.setSelectedBrand(brand)}
        >
        {brand.name}
        </Card>
        </Col>
      )}
  </Row>


  );
});

export default BrandBar;
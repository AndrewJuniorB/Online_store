import React, {useContext, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TypeBar from '../components/TypeBar.js';
import BrandBar from '../components/BrandBar.js';
import {observer} from 'mobx-react-lite';
import DeviceList from '../components/DeviceList.js';
import {Context} from '../index.js';
import {fetchTypes} from '../http/deviceAPI.js';

const Shop = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
  }, [])

  return (
    <Container>
      <Row>
        <Col md={3} >
          <TypeBar/>
        </Col>


        <Col md={9} className="d-inline-block">
          <BrandBar/>
          <DeviceList/>
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
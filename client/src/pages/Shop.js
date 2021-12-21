import React, {useContext, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TypeBar from '../components/TypeBar.js';
import BrandBar from '../components/BrandBar.js';
import {observer} from 'mobx-react-lite';
import DeviceList from '../components/DeviceList.js';
import {Context} from '../index.js';
import {fetchTypes, fetchBrands, fetchDevices} from '../http/deviceAPI.js';
import Pages from '../components/Pages.js';

const Shop = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {

    fetchTypes().then(data => device.setTypes(data))
    fetchBrands().then(data => device.setBrands(data))
    fetchDevices(null, null, 1, 3).then(data => {
      //console.log('DATA', data.rows))
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    })

  }, [])

  useEffect(() => {
    fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 3).then(data => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    })
  }, [device.page, device.selectedType, device.selectedBrand])

  return (
    <Container>
      <Row>
        <Col md={3} >
          <TypeBar/>
        </Col>


        <Col md={9} className="d-inline-block">
          <BrandBar/>
          <DeviceList/>
          <Pages/>
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
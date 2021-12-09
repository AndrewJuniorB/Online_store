  import React from 'react';
  import { Col, Container, Image, Row, Button } from 'react-bootstrap';
  import starRate from '../assets/StarDevicePage.png';
  import Card from 'react-bootstrap/Card';


  const DevicePage = () => {
    const device = { id: 1, name: "WC234", price: 259, rating: 1, img: "http://localhost:4000/8cbcb2b5-9105-4a73-9c13-533a3c43b0ac.jpg", typeId: 2, brandId: 1 }
    const description = [
      {id:1, title: 'Yearly Electricity Usage', description: '645 kWh'},
      {id:2, title: 'Wattage', description: '900 W'},
      {id:3, title: 'Blade Material', description: 'Steel'},
      {id:4, title: 'Weight', description: '27 lb. 8 oz'}
    ]
    return (
      <Container className='mt-3'>
        <Row lassName='d-flex flex-column align-items-center mt-2'>
          <Col md={4}>
            <Image width={300} height={300} src={device.img} />
          </Col>
          <Col md={4}>
            <Row className='d-flex flex-column align-items-center'>
              <h2 className='d-flex flex-column align-items-center'>{device.name}</h2>
              <div
                className='d-flex align-items-center justify-content-center'
                style={{ background: `url(${starRate}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}
              >
                {device.rating}
              </div>
            </Row>
          </Col>
          <Col md={4}>
            <Card
            className='d-flex flex-column align-items-center justify-content-around'
            style={{width: 300, height:300, fontSize: 32, border: '3px solid dodgerblue'}}
            >
              <h3>Price start: {device.price} $</h3>
              <Button variant={'outline-primary'}>Add to your basket</Button>
            </Card>
          </Col>
        </Row>
        <Row className='d-flex flex-column m-3'>
          <h2> Description </h2>
          {description.map((info, index) =>
          <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
            {info.title}: {info.description}

          </Row>
            )}

        </Row>
      </Container>
    );
  };

  export default DevicePage;
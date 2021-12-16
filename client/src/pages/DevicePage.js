  import React, {useState, useEffect} from 'react';
  import { Col, Container, Image, Row, Button } from 'react-bootstrap';
  import starRate from '../assets/StarDevicePage.png';
  import Card from 'react-bootstrap/Card';
  import {useParams} from 'react-router-dom';
  import {fetchOneDevice} from '../http/deviceAPI.js';


  const DevicePage = () => {
    const [device, setDevice] = useState({info: []});
    const {id} = useParams();

    useEffect( () => {
      fetchOneDevice(id).then(data => setDevice(data))
    }, [])


    return (
      <Container className='mt-3'>
        <Row lassName='d-flex flex-column align-items-center mt-2'>
          <Col md={4}>
            <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
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
          {device.info.map((info, index) =>
          <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
            {info.title}: {info.description}

          </Row>
            )}

        </Row>
      </Container>
    );
  };

  export default DevicePage;
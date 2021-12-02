import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {Context} from '../index.js';
import {Col, Card} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import star from '../assets/star.png';
import { useNavigate } from 'react-router-dom';
import {DEVICE_ROUTE} from '../utils/consts.js';

const DeviceItem = observer(({device}) => {
  const history = useNavigate();
  console.log('HISTORY', history);
  return (
    <Col md={3} className='mt-3' onClick={() => history(DEVICE_ROUTE + '/' + device.id)}>
      <Card style={{width:150, cursor: 'pointer'}} border={'light'}>
        <Image src={device.img} width={150} height={150}/>
        <div className='d-flex text-black-50 justify-content-between align-items-center'>
          <div>TEST...</div>
            <div className='d-flex align-items-center'>
              <div>{device.rating}</div>
              <Image width={18} height={18} src={star}/>
            </div>
          </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
});

export default DeviceItem;
import React, { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Form, Dropdown, Col, Row} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Context } from '../../index.js';
import { observer } from 'mobx-react-lite';

const CreateDevice = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  };

  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Item
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* <Form.Control placeholder={'Please provide type name'}/> */}
          <Dropdown className='mt-2 mb-2'>
            <Dropdown.Toggle>Choose type</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map(type =>
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='mt-2 mb-2'>
            <Dropdown.Toggle> Choose brand</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map(brand =>
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='mt-2 mb-2'>
            <Dropdown.Toggle> Choose device</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.devices.map( item =>
              <Dropdown.Item key={item.id}>{item.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className = 'mt-3'
            placeholder='What name for an item'
          />
          <Form.Control
            className='mt-3'
            placeholder='Provide price'
            type='number'
          />
          <Form.Control
            className='mt-3'
            type='file'
          />

          <hr/>
          <Button
            variant={'outline-info'}
            onClick={addInfo}
          >
            Add product information
          </Button>
          {info.map (i =>

            <Row className='mt-4' key={i.number}>
              <Col md={4}>
                <Form.Control placeholder='Type of description'/>
              </Col>
              <Col md={4}>
                <Form.Control placeholder='Description'/>
              </Col>
              <Col md={4}>
              <Button
              onClick={() => removeInfo(i.number)}
              variant={'outline-danger'}
              >
                Delete?
              </Button>
              </Col>
            </Row>

          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Close</Button>
        <Button variant='outline-success' onClick={onHide}>Add Device</Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateDevice;
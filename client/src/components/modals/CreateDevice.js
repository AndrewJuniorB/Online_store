import React, {useContext} from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button, Form, Dropdown} from 'react-bootstrap';
import {Context} from '../../index.js';

const CreateDevice = ({show, onHide}) => {
  const {device} = useContext(Context);
  return (
<Modal
    show={show}
    onHide={onHide}
    size="lg"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Add Device...
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {/* <Form.Control placeholder={'Please provide type name'}/> */}
      <Dropdown></Dropdown>
    </Modal.Body>
    <Modal.Footer>
      <Button variant='outline-danger' onClick={onHide}>Close</Button>
      <Button variant='outline-warning' onClick={onHide}>Add Device</Button>
    </Modal.Footer>
  </Modal>
  );
};

export default CreateDevice;
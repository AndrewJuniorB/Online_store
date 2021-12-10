import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button, Form} from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

const CreateType = observer(({show, onHide}) => {
  return (
    <Modal
    show={show}
    onHide={onHide}
    size="lg"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Add Type...
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form.Control placeholder={'Please provide type name'}/>
    </Modal.Body>
    <Modal.Footer>
      <Button variant='outline-danger' onClick={onHide}>Close</Button>
      <Button variant='outline-success' onClick={onHide}>Add type</Button>
    </Modal.Footer>
  </Modal>
  );
});

export default CreateType;
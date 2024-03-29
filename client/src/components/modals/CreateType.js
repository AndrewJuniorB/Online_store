import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button, Form} from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import {createType} from '../../http/deviceAPI.js';

const CreateType = observer(({show, onHide}) => {
  const [value, setValue] = useState('');
  const addType = () => {
    createType({name: value}).then(data => setValue(''))
    onHide()
  }

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
      <Form.Control
      value = {value}
      onChange = {e => setValue(e.target.value)}
      placeholder={'Please provide type name'}
      />
    </Modal.Body>
    <Modal.Footer>
      <Button variant='outline-danger' onClick={onHide}>Close</Button>
      <Button variant='outline-success' onClick={addType}>Add type</Button>
    </Modal.Footer>
  </Modal>
  );
});

export default CreateType;
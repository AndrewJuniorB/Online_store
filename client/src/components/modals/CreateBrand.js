import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';
import { createBrand } from '../../http/deviceAPI.js';
import {observer} from 'mobx-react-lite';

const CreateBrand = ({ show, onHide }) => {
  const [value, setValue] = useState('');

  const addBrand = () => {
    createBrand({name: value}).then(data => setValue(''))
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
          Add Brand...
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
          value = {value}
          onChange = {e => setValue(e.target.value)}
          placeholder={'please provide brand name'}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Close</Button>
        <Button variant='outline-success' onClick={addBrand}>Add Brand</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;
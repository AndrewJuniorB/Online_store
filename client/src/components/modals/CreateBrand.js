import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';

const CreateBrand = ({ show, onHide }) => {
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
          <Form.Control placeholder={'please provide brand name'}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Close</Button>
        <Button variant='outline-success' onClick={onHide}>Add Brand</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;
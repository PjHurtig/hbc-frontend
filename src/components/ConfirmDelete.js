import React from "react";
import { Modal, Button } from "react-bootstrap";

// confirm delete modal for all deletion functionality
const ConfirmDelete = ({ show, handleClose, handleDelete, itemName }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete "{itemName}"?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => { handleDelete(); handleClose(); }}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmDelete;

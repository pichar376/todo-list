import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const ModalDelete = ({ show, handleClose, onDelete }) => {
  const location = useLocation();
  const idToDelete = location.pathname;
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete the task?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              onDelete(parseInt(idToDelete.slice(1)));
              console.log(idToDelete.slice(1));
              handleClose();
            }}
          >
            Yes Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDelete;

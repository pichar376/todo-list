import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalTodo = ({ children, onClose, handleShow, show }) => {
  return (
    <>
      <div className="container--add--task">
        <Button variant="primary" onClick={handleShow}>
          Add New Task
        </Button>
      </div>

      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};

export default ModalTodo;

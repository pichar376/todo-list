import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { TodoContext } from "../../TodoContext/TodoContext";
import { useContext } from "react";

const ModalTodo = ({ children }) => {
  const { clear, handleCloseTodoModal, handleShowTodoModal, showModalTodo } =
    useContext(TodoContext);

  return (
    <>
      <div className="container--add--task">
        <Button variant="primary" onClick={handleShowTodoModal}>
          Add New Task
        </Button>
      </div>

      <Modal show={showModalTodo} onHide={handleCloseTodoModal}>
        <Modal.Header closeButton onClick={clear}>
          <Modal.Title>Create Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};

export default ModalTodo;

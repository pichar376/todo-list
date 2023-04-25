import Modal from "react-bootstrap/Modal";
import { TodoContext } from "../../TodoContext/TodoContext";
import { useContext } from "react";
import { BsPlusLg } from "react-icons/bs";
import "./modalCreateTodoStyle.css";
import { Stack, Button } from "react-bootstrap";

const ModalCreateTodo = ({ children }) => {
  const { clear, handleCloseTodoModal, handleShowTodoModal, showModalTodo } =
    useContext(TodoContext);

  return (
    <>
      <Stack
        className="justify-content-center"
        direction="horizontal"
        style={{ padding: "2rem" }}
      >
        <Button
          className="d-flex justify-content-center align-items-center"
          variant="success"
          onClick={handleShowTodoModal}
          style={{
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            zIndex: 999,
          }}
        >
          <BsPlusLg
            style={{ fontSize: "3rem" }}
            strokeWidth={2}
            color="white"
          />
        </Button>
      </Stack>

      <Modal show={showModalTodo} onHide={handleCloseTodoModal}>
        <Modal.Header closeButton onClick={clear}>
          <Modal.Title>Create Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};

export default ModalCreateTodo;

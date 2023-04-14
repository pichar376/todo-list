import { useState } from "react";
import {
  Button,
  Form,
  FormControl,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import TodoItem from "../TodoItem/TodoItem";
import ModalTodo from "../ModalTodo/ModalTodo";
import "./todoForm.styles.css";

const TodoForm = ({
  todos,
  onComplete,
  handleSubmit,
  handleChange,
  title,
  handleDelete,
  handleUpdate,
  onShow,
  onClose,
  setTodos,
  show,
  filteredItems,
  setTitle,
}) => {
  const [showModalTodo, setShowModalTodo] = useState(false);
  const handleCloseTodoModal = () => {
    setShowModalTodo(false);
  };
  const handleShowTodoModal = () => setShowModalTodo(true);

  //function to clear the created form of the new task if it has not been added to the list
  const clear = () => {
    setTitle("");
  };

  return (
    <>
      <ModalTodo
        onClose={handleCloseTodoModal}
        show={showModalTodo}
        handleShow={handleShowTodoModal}
        setTitle={setTitle}
        clear={clear}
      >
        <Form
          onSubmit={handleSubmit}
          className="d-flex justify-content-center mt-4 gap-2 "
        >
          <FormControl
            type="text"
            value={title}
            onChange={handleChange}
            autoFocus
          />

          <Button size="sm" type="submit" onClick={handleCloseTodoModal}>
            Added
          </Button>
        </Form>
      </ModalTodo>

      <ListGroup
        className="mt-4"
        as="ol"
        numbered
        style={{ listStyleType: "none" }}
      >
        {filteredItems.map((el) => (
          <ListGroupItem
            key={el.id}
            as="li"
            className="container d-flex "
            style={{
              minWidth: "320px",
              height: "4rem",
            }}
          >
            <TodoItem
              handleShow={onShow}
              show={show}
              key={el.id}
              el={el}
              handleclose={onClose}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
              onComplete={onComplete}
              todos={todos}
              setTodos={setTodos}
              completed={el.completed}
            />
          </ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
};

export default TodoForm;

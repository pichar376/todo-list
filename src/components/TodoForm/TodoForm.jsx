import { useContext } from "react";
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
import { TodoContext } from "../../TodoContext/TodoContext";

const TodoForm = () => {
  const {
    handleSubmit,
    handleChange,
    title,
    filteredItems,
    handleCloseTodoModal,
  } = useContext(TodoContext);
  return (
    <>
      <ModalTodo>
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
            <TodoItem key={el.id} el={el} completed={el.completed} />
          </ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
};

export default TodoForm;

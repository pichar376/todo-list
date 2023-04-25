import { useContext } from "react";
import {
  Button,
  Form,
  FormControl,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import TodoItem from "../TodoItem/TodoItem";
import ModalTodo from "../ModalCreateTodo/ModalCreateTodo";
import "./todoForm.styles.css";
import { TodoContext } from "../../TodoContext/TodoContext";
import ModalCreateTodo from "../ModalCreateTodo/ModalCreateTodo";

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
      <ModalCreateTodo>
        <Form
          style={{ outline: "none !important" }}
          onSubmit={handleSubmit}
          className="d-flex justify-content-center mt-4 gap-2"
        >
          <FormControl
            type="text"
            value={title}
            onChange={handleChange}
            autoFocus
          />

          <Button size="sm" type="submit" onClick={handleCloseTodoModal}>
            Add
          </Button>
        </Form>
      </ModalCreateTodo>

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
              minWidth: "300px",
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

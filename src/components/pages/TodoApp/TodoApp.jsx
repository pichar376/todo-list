import { useState } from "react";
import { Button, Form, FormControl, ListGroup, Stack } from "react-bootstrap";
import ModalDelete from "../../ModalDelete/ModalDelete";
import TodoItem from "../../TodoItem/TodoItem";
import useLocalStorage from "../../../hooks/useLocalStorage";

const STORAGE_KEY = "@@todoApp/todoAppLocalStorage";

const TodoApp = () => {
  const [title, setTitle] = useState("");

  const [todos, setTodos, saveTodos] = useLocalStorage(STORAGE_KEY, []);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    saveTodos([...todos, newTodo]);
    setTitle("");
  };

  const handleDelete = (id) => {
    const newItems = todos.filter((el) => el.id !== id);
    saveTodos(newItems);
  };

  const handleUpdate = (id, value) => {
    const currentIndex = todos.findIndex((el) => el.id === id);
    const newTodos = todos;
    newTodos[currentIndex].title = value;
    saveTodos(newTodos);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Stack>
      <h1 style={{ textAlign: "center" }}>todoApp</h1>

      <Form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center mt-4 gap-2"
      >
        <FormControl
          style={{ maxWidth: "15rem" }}
          type="text"
          value={title}
          onChange={handleChange}
        />
        <Button type="submit">Added</Button>
      </Form>

      <ListGroup className="mt-4" as="ol" numbered>
        {todos.map((el) => (
          <ListGroup.Item
            key={el.id}
            as="li"
            className="container d-flex "
            style={{ minWidth: "250px", height: "4rem" }}
          >
            <TodoItem
              handleShow={handleShow}
              show={show}
              key={el.id}
              el={el}
              handleclose={handleClose}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
              todos={todos}
              setTodos={setTodos}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>

      <ModalDelete
        show={show}
        handleClose={handleClose}
        onDelete={handleDelete}
      />
    </Stack>
  );
};

export default TodoApp;

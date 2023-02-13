import { useState } from "react";
import { Button, Form, FormControl, ListGroup, Stack } from "react-bootstrap";
import TodoItem from "./components/TodoItem/TodoItem";

const TodoApp = () => {
  const [title, setTitle] = useState("");

  const [todos, setTodos] = useState([]);

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
    setTodos([...todos, newTodo]);
    setTitle("");
  };

  const handleDelete = (id) => {
    const newItems = todos.filter((el) => el.id !== id);
    setTodos(newItems);
  };

  const handleUpdate = (id, value) => {
    const itemToEdit = todos.find((el) => el.id === id);

    itemToEdit.title = value;
  };

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

      <ListGroup className="mt-2" as="ol" numbered>
        {todos.map((el) => (
          <ListGroup.Item
            as="li"
            style={{ margin: "0 auto", maxWidth: "980px", minWidth: "420px" }}
            className="query-item"
          >
            <TodoItem
              key={el.id}
              el={el}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
              todos={todos}
              setTodos={setTodos}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Stack>
  );
};

export default TodoApp;

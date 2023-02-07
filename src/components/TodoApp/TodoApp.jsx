import { useState } from "react";
import { Button, Stack } from "react-bootstrap";
import TodoItem from "./components/TodoItem/TodoItem";

const TodoApp = () => {
  const [title, setTitle] = useState("");

  const [todos, setTodos] = useState([]);

  const [isEdit, SetIsEdit] = useState(false);

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

  const handleEdit = (id) => {
    SetIsEdit(true);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>todoApp</h1>
      <Stack gap="3rem">
        <form
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
          onSubmit={handleSubmit}
        >
          <input type="text" value={title} onChange={handleChange} />
          <Button type="submit">Added</Button>
        </form>
      </Stack>
      <h1>
        {todos.map((el) => (
          <TodoItem
            key={el.id}
            el={el}
            onDelete={handleDelete}
            onUpdate={handleEdit}
            isEdit={isEdit}
          />
        ))}
      </h1>
    </div>
  );
};

export default TodoApp;

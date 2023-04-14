import { useState } from "react";
import { Button, Form, FormControl, ListGroup, Stack } from "react-bootstrap";
import ModalDelete from "../../ModalDelete/ModalDelete";
import TodoItem from "../../TodoItem/TodoItem";
import useLocalStorage from "../../../hooks/useLocalStorage";
import ModalTodo from "../../ModalTodo/ModalTodo";
import TodoForm from "../../TodoForm/TodoForm";
import SearchTodo from "../../SearchTodo/SearchTodo";

const STORAGE_KEY = "@@todoApp/todoAppLocalStorage";

const TodoApp = () => {
  const [title, setTitle] = useState("");

  const [todos, setTodos, saveTodos] = useLocalStorage(STORAGE_KEY, []);
  const [search, setSearch] = useState("");

  const filteredItems = todos.filter((el) =>
    el.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

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

  const handleComplete = (id) => {
    const currentIndex = todos.findIndex((el) => el.id === id);
    const newTodos = [...todos];
    newTodos[currentIndex].completed = !newTodos[currentIndex].completed;

    saveTodos(newTodos);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Stack>
      <h1 style={{ textAlign: "center" }}>todoApp</h1>
      <SearchTodo onSearch={handleSearch} search={search} />

      <TodoForm
        todos={todos}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        title={title}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        setTodos={setTodos}
        show={show}
        onComplete={handleComplete}
        onShow={handleShow}
        onClose={handleClose}
        filteredItems={filteredItems}
        setTitle={setTitle}
      />

      <ModalDelete
        show={show}
        handleClose={handleClose}
        onDelete={handleDelete}
      />
    </Stack>
  );
};

export default TodoApp;

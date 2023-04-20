import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const STORAGE_KEY = "@@todoApp/todoAppLocalStorage";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {

  const [title, setTitle] = useState("");
  const [todos, setTodos, saveTodos] = useLocalStorage(STORAGE_KEY, []);
  const [search, setSearch] = useState("");
  const [showModalTodo, setShowModalTodo] = useState(false);

  const handleCloseTodoModal = () => {
    setShowModalTodo(false);
  };
  const handleShowTodoModal = () => setShowModalTodo(true);

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

  //function to clear the created form of the new task if it has not been added to the list
  const clear = () => {
    setTitle("");
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const data = {
    todos,
    handleComplete,
    handleSubmit,
    handleChange,
    title,
    handleDelete,
    handleUpdate,
    handleShow,
    handleClose,
    setTodos,
    show,
    filteredItems,
    setTitle,
    clear,
    handleCloseTodoModal,
    handleShowTodoModal,
    showModalTodo,
    handleSearch
  }

  return (
    <TodoContext.Provider value={data}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
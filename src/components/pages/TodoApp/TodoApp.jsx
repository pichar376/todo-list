import { Stack } from "react-bootstrap";
import ModalDelete from "../../ModalDelete/ModalDelete";
import TodoForm from "../../TodoForm/TodoForm";
import SearchTodo from "../../SearchTodo/SearchTodo";
import { TodoContext } from "../../../TodoContext/TodoContext";
import { useContext } from "react";

const TodoApp = () => {
  const { handleSearch, search, todos } = useContext(TodoContext);
  const renderSearch = () => {
    if (todos.length) {
      return <SearchTodo onSearch={handleSearch} search={search} />;
    }
  };
  return (
    <Stack>
      <h1 style={{ textAlign: "center" }}>todoApp</h1>
      {renderSearch()}
      <TodoForm />
      <ModalDelete />
    </Stack>
  );
};

export default TodoApp;

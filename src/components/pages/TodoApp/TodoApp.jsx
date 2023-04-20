import { Stack } from "react-bootstrap";
import ModalDelete from "../../ModalDelete/ModalDelete";
import TodoForm from "../../TodoForm/TodoForm";
import SearchTodo from "../../SearchTodo/SearchTodo";
import { TodoContext } from "../../../TodoContext/TodoContext";
import { useContext } from "react";

const TodoApp = () => {
  const { handleSearch, search } = useContext(TodoContext);
  return (
    <Stack>
      <h1 style={{ textAlign: "center" }}>todoApp</h1>
      <SearchTodo onSearch={handleSearch} search={search} />

      <TodoForm />

      <ModalDelete />
    </Stack>
  );
};

export default TodoApp;

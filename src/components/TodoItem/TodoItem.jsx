import { useState } from "react";
import { Button } from "react-bootstrap";
import TodoFormEdit from "../TodoFormEdit/TodoFormEdit";
import TodoInfo from "../TodoInfo/TodoInfo";
const TodoItem = ({
  el,
  onDelete,
  todos,
  setTodos,
  onUpdate,
  show,
  handleShow,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div
      style={{
        marginTop: "2rem",
        display: "flex",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      {isEdit ? (
        <TodoFormEdit
          el={el}
          todos={todos}
          setTodos={setTodos}
          onUpdate={onUpdate}
          setIsEdit={setIsEdit}
        />
      ) : (
        <TodoInfo
          el={el}
          setIsEdit={setIsEdit}
          onDelete={onDelete}
          show={show}
          handleShow={handleShow}
        />
      )}
    </div>
  );
};

export default TodoItem;

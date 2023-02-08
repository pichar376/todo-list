import { useState } from "react";
import { Button } from "react-bootstrap";
import TodoFormEdit from "../TodoFormEdit/TodoFormEdit";
const TodoItem = ({ el, onDelete, todos, setTodos, onUpdate }) => {
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
        <div>
          <h3>{el.title}</h3>
          <div
            style={{
              display: "flex",
              gap: ".2rem",
            }}
          >
            <Button onClick={() => setIsEdit(true)}>Edit</Button>
            <Button
              onClick={() => {
                onDelete(el.id);
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;

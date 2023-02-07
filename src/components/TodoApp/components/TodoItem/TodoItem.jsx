import { Button } from "react-bootstrap";
import TodoFormEdit from "../TodoFormEdit/TodoFormEdit";
const TodoItem = ({ el, onDelete, onUpdate, isEdit }) => {
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
        <TodoFormEdit />
      ) : (
        <div>
          <h3>{el.title}</h3>
          <div
            style={{
              display: "flex",
              gap: ".2rem",
            }}
          >
            <Button
              onClick={() => {
                onUpdate(el.id);
              }}
            >
              Edit
            </Button>
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

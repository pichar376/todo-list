import { Button, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TodoInfo = ({ el, setIsEdit, handleShow, completed, onComplete }) => {
  const navigate = useNavigate();
  const handleToDelete = (path) => {
    navigate(`${path}`);
    handleShow();
  };
  return (
    <Stack
      gap={3}
      className="container d-flex flex-row"
      style={{ position: "relative" }}
    >
      <h3
        className="flex-grow-1"
        style={{ textDecorationLine: completed ? "line-through" : "none" }}
        onClick={() => {
          onComplete(el.id);
        }}
      >
        {el.title}
      </h3>
      <Stack
        className="d-flex flex-row"
        gap={1}
        style={{ position: "absolute", fontWeight: "300", right: "1rem" }}
      >
        <Button onClick={() => setIsEdit(true)}>Edit</Button>
        <Button
          onClick={() => {
            handleToDelete(el.id);
          }}
        >
          Delete
        </Button>
      </Stack>
    </Stack>
  );
};

export default TodoInfo;

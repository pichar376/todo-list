import { useContext } from "react";
import { Button, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { TodoContext } from "../../TodoContext/TodoContext";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";

const TodoInfo = ({ el, completed, setIsEdit }) => {
  const { handleComplete, handleShow } = useContext(TodoContext);
  const navigate = useNavigate();
  const handleToDelete = (path) => {
    navigate(`${path}`);
    handleShow();
  };
  return (
    <>
      <Stack
        gap={3}
        direction="horizontal"
        style={{ overflow: "hidden", width: "85%", height: "4rem" }}
      >
        <h3
          className="flex-grow-0"
          style={{
            textDecorationLine: completed ? "line-through" : "none",
          }}
          onClick={() => {
            handleComplete(el.id);
          }}
        >
          {el.title}
        </h3>
      </Stack>
      <Stack
        className="d-flex flex-row align-items-center"
        gap={3}
        style={{
          position: "absolute",
          right: "1rem",
          height: "100%",
        }}
      >
        <AiOutlineEdit size="1.2rem" onClick={() => setIsEdit(true)} />

        <RiDeleteBinLine
          size="1.2rem"
          onClick={() => {
            handleToDelete(el.id);
          }}
        />
      </Stack>
    </>
  );
};

export default TodoInfo;

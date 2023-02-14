import { useState } from "react";
import { Button, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TodoInfo = ({ el, setIsEdit, handleShow }) => {
  const navigate = useNavigate();
  const handleToDelete = (path) => {
    navigate(`${path}`);
    handleShow();
  };
  return (
    <Stack
      direction="horizontal"
      gap={3}
      className="d-flex"
      style={{ alignItems: "flex-end", width: "100%" }}
    >
      <h3 style={{ marginBottom: "0", flexGrow: "1", fontWeight: "300" }}>
        {el.title}
      </h3>
      <Stack className="d-flex " direction="horizontal" gap={1}>
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

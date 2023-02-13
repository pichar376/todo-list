import { Button, Stack } from "react-bootstrap";

const TodoInfo = ({ el, setIsEdit, onDelete }) => {
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
            onDelete(el.id);
          }}
        >
          Delete
        </Button>
      </Stack>
    </Stack>
  );
};

export default TodoInfo;

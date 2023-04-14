import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const TodoFormEdit = ({ el, todos, setTodos, onUpdate, setIsEdit }) => {
  const [newValue, setNewValue] = useState(el.title);

  const handleUpdate = () => {
    onUpdate(el.id, newValue);
    setIsEdit(false);
  };

  const handleChange = (e) => {
    setNewValue(e.target.value);
  };
  return (
    <Form className="d-flex gap-1" style={{ width: "100%" }}>
      <Form.Control
        type="text"
        value={newValue}
        onChange={handleChange}
        style={{ fontSize: "1.3rem", padding: "3px", fontWeight: "300" }}
      />
      <Button onClick={handleUpdate}>update</Button>
    </Form>
  );
};

export default TodoFormEdit;

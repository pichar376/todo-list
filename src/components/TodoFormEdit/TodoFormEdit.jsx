import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { TodoContext } from "../../TodoContext/TodoContext";

const TodoFormEdit = ({ el, setIsEdit }) => {
  //this is value of the search input
  const [newValue, setNewValue] = useState(el.title);

  const { handleUpdate } = useContext(TodoContext);

  const handleUpdateForm = (e) => {
    e.preventDefault();
    handleUpdate(el.id, newValue);
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
        autoFocus
      />
      <Button type="submit" onClick={handleUpdateForm}>
        update
      </Button>
    </Form>
  );
};

export default TodoFormEdit;

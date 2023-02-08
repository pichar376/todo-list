import { useState } from "react";
import { Button } from "react-bootstrap";

const TodoFormEdit = ({ el, todos, setTodos, onUpdate, setIsEdit }) => {
  const [newValue, setNewValue] = useState(el.title);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClickUpdate = () => {
    onUpdate(el.id, newValue);
    setIsEdit(false);
  };
  const handleChange = (e) => {
    setNewValue(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newValue} onChange={handleChange} />
      <Button onClick={handleClickUpdate}>update</Button>
    </form>
  );
};

export default TodoFormEdit;

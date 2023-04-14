import { useState } from "react";
import TodoFormEdit from "../TodoFormEdit/TodoFormEdit";
import TodoInfo from "../TodoInfo/TodoInfo";
import TodoIcon from "../../TodoIcon/TodoIcon";
import { Button } from "react-bootstrap";

const TodoItem = ({
  el,
  onDelete,
  todos,
  setTodos,
  onUpdate,
  show,
  handleShow,
  onComplete,
  completed,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <>
      {isEdit ? (
        <TodoFormEdit
          el={el}
          todos={todos}
          setTodos={setTodos}
          onUpdate={onUpdate}
          setIsEdit={setIsEdit}
        />
      ) : (
        <>
          <TodoIcon color="green" completed={completed} />
          <TodoInfo
            el={el}
            onComplete={onComplete}
            completed={completed}
            setIsEdit={setIsEdit}
            onDelete={onDelete}
            show={show}
            handleShow={handleShow}
          />
        </>
      )}
    </>
  );
};

export default TodoItem;

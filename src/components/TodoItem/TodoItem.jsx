import TodoFormEdit from "../TodoFormEdit/TodoFormEdit";
import TodoInfo from "../TodoInfo/TodoInfo";
import TodoIcon from "../../TodoIcon/TodoIcon";
import { TodoContext } from "../../TodoContext/TodoContext";
import { useContext, useState } from "react";

const TodoItem = ({ el, completed }) => {
  const { todos, setTodos, show } = useContext(TodoContext);
  const [isEdit, setIsEdit] = useState(false);
  return (
    <>
      {isEdit ? (
        <TodoFormEdit
          el={el}
          todos={todos}
          setTodos={setTodos}
          setIsEdit={setIsEdit}
        />
      ) : (
        <>
          <TodoIcon color="green" completed={completed} />
          <TodoInfo
            el={el}
            completed={completed}
            setIsEdit={setIsEdit}
            show={show}
          />
        </>
      )}
    </>
  );
};

export default TodoItem;

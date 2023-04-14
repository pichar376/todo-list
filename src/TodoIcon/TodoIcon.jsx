import { AiOutlineCheck } from "react-icons/ai";

const TodoIcon = ({ color = "gray", completed, ...props }) => {
  return (
    <div>
      <AiOutlineCheck
        {...props}
        strokeWidth={"40px"}
        style={{
          fontSize: "18px",
          position: "absolute",
          left: "4px",
          top: "15px",
          color: `${color}`,
          opacity: completed ? "1" : "0",
        }}
      />
    </div>
  );
};

export default TodoIcon;

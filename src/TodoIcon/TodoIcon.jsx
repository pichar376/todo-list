import { AiOutlineCheck } from "react-icons/ai";

const TodoIcon = ({ color = "gray", ...props }) => {
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
        }}
      />
    </div>
  );
};

export default TodoIcon;

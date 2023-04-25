import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { CiSearch } from "react-icons/ci";

const SearchTodo = ({ onSearch, search }) => {
  return (
    <InputGroup
      className="mb-3 mt-5"
      style={{ width: "60%", margin: "0 auto" }}
    >
      <InputGroup.Text
        style={{ backgroundColor: "transparent" }}
        onChange={onSearch}
      >
        <CiSearch />
      </InputGroup.Text>

      <Form.Control
        placeholder="Search Todo"
        value={search}
        onChange={onSearch}
      />
    </InputGroup>
  );
};

export default SearchTodo;

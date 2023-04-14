import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./searchTodo.styles.css";

const SearchTodo = ({ onSearch, search }) => {
  return (
    <>
      <div className="container-search">
        <InputGroup className="mb-3 mt-5">
          <Form.Control
            placeholder="Search Todo"
            value={search}
            onChange={onSearch}
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </div>
    </>
  );
};

export default SearchTodo;

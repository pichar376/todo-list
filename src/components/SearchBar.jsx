import { InputGroup, FormControl, Button } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";

function SearchBar() {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text>
          <CiSearch />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl placeholder="Buscar" aria-label="Buscar" />
      <InputGroup.Append>
        <Button variant="outline-secondary">Buscar</Button>
      </InputGroup.Append>
    </InputGroup>
  );
}
export default SearchBar;

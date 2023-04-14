import { BrowserRouter } from "react-router-dom";
import TodoApp from "./components/pages/TodoApp/TodoApp";
import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <TodoApp />
    </BrowserRouter>

  )
}

export default App;
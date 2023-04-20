import { BrowserRouter } from "react-router-dom";
import TodoApp from "./components/pages/TodoApp/TodoApp";
import "./index.css"
import { TodoProvider } from "./TodoContext/TodoContext";

function App() {
  return (
    <TodoProvider>
      <BrowserRouter>
        <TodoApp />
      </BrowserRouter>
    </TodoProvider>

  )
}

export default App;
import TodoApp from "./components/TodoApp/TodoApp";
import "./App.css"
import { BrowserRouter } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <TodoApp />
    </BrowserRouter>

  )
}

export default App;

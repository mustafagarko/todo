import Form from "./components/Form";
import Todo from "./components/Todo";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  function setDataFromChild(data) {
    setTodos(data);
  }
  return (
    <div>
      <Form todosData={setDataFromChild} />
      <Todo data={todos} />
    </div>
  );
}

export default App;

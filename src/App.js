import Form from "./components/Form";
import Todo from "./components/Todo";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  function setDataFromChild(data) {
    setTodos(data);
  }
  return (
    <div className="flex flex-col gap-10">
      <Form todosData={setDataFromChild} />
      <Todo data={todos} />
    </div>
  );
}

export default App;

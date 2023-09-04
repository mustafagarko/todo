import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = function ({ todosData }) {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    id: new Date().toISOString(),
    text: "",
    isDone: false,
  });
  const initialState = {
    id: new Date().toISOString(),
    text: "",
    isDone: false,
  };

  function handleChange(e) {
    e.preventDefault();
    setTodo({ ...todo, text: e.target.value });
  }
  function handleClick(e) {
    e.preventDefault();
    if (todos.length === 12) {
      toast.error("You can't add more than 12 notes!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    setTodos([...todos, todo]);
    setTodo(initialState);
    toast.success("Note added!");
    // console.log(todos);
  }
  useEffect(() => {
    todosData(todos);
  }, [todos]);

  return (
    <section className="p-6">
      <div className="flex justify-center items-center gap-6 ">
        <input
          placeholder="type your task..."
          className="bg-gray-300 border-2 border-gray-700 rounded-md w-[24rem] h-[4rem] p-2"
          onChange={(e) => handleChange(e)}
          value={todo.text || ""}
          maxLength={50}
        />
        <button
          className="w-[8rem] h-[4rem] bg-blue-400 rounded-md p-2"
          onClick={(e) => handleClick(e)}
        >
          Submit
        </button>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Form;

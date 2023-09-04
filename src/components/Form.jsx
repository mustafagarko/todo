import { useState } from "react";

const Form = function () {
  const [todo, setTodo] = useState({
    id: new Date().toISOString(),
    text: "",
    isDone: false,
  });
  function handleChange(e) {
    e.preventDefault();
    setTodo({ ...todo, text: e.target.value });
    console.log(todo);
  }
  return (
    <section className="p-6">
      <div className="flex justify-center items-center gap-6 ">
        <input
          placeholder="type your task..."
          className="bg-gray-300 border-2 border-gray-700 rounded-md w-[24rem] h-[4rem] p-2"
          onChange={(e) => handleChange(e)}
          value={todo.text || ""}
        />
        <button className="w-[8rem] h-[4rem] bg-blue-400 rounded-md p-2">
          Submit
        </button>
      </div>
    </section>
  );
};

export default Form;

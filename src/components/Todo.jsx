import desk from "../assets/desk.avif";

const Todo = function () {
  return (
    <div
      className="your-div-class bg-cover w-screen h-screen bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${desk})`,
      }}
    ></div>
  );
};

export default Todo;

import desk from "../assets/desk.avif";
import note from "../assets/note.webp";

const Todo = function ({ data }) {
  return (
    <div
      className="relative bg-fill md:bg-cover  z-10 w-screen h-[150vh] md:h-[60.25vw] bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${desk})`,
      }}
    >
      <div className="absolute md:top-[10%] top-[5%] md:w-[73%] w-[80%] z-30 md:left-[14%] left-[5%]">
        <div className="flex flex-wrap gap-5 md:gap-0">
          {data.map((todo) => (
            <div key={todo.id} className="w-[45%] md:w-[23%] relative z-30">
              <img src={note} className="w-full h-full " alt="Note" />
              <p className="text-black absolute md:p-2 md:text-base text-sm inset-5 md:inset-4 break-words">
                {todo.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;

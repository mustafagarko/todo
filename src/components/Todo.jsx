import desk from "../assets/desk.avif";
import note from "../assets/note.webp";

const Todo = function ({ data }) {
  // Split the data into chunks of 4 todos each
  const chunkedData = [];
  for (let i = 0; i < data.length; i += 4) {
    chunkedData.push(data.slice(i, i + 4));
  }

  return (
    <div
      className="relative  bg-cover z-10 w-screen h-[56.25vw] bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${desk})`,
      }}
    >
      <div className="absolute top-[10%] z-30 left-[14%]">
        {chunkedData.map((chunk, rowIndex) => (
          <div key={rowIndex} className="flex w-50 gap-2 md:gap-10">
            {chunk.map((todo) => (
              <div
                key={todo.id}
                className="w-[20%] h-[50%] md:w-[18%] md:h-[18%] relative z-30"
              >
                <img src={note} className="w-full h-full " alt="Note" />
                <p className="text-black absolute inset-4 break-words">
                  {todo.text}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;

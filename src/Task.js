import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({
  input,
  setInput,
  btnstyling,
  todos,
  setTodos,
  username,
  setUsername,
}) => {
  const onNameChange = (e) => {
    setUsername(e.target.value);
  };

  const onTaskChange = (e) => {
    setInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: uuidv4(), name: input, completed: false }]);
    setInput("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <div className="p-5 text-[#FFFF00]">
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          To Do List App{" "}
          <FontAwesomeIcon
            icon="fa-solid fa-list-check"
            style={{ color: "#FFFF00" }}
          />
        </h1>
        <h2 className="ml-20 my-5 text-3xl font-semibold">
          Welcome{" "}
          <input
            type="text"
            className="outline-none bg-inherit border-none w-52"
            placeholder="Name here"
            value={username}
            onChange={onNameChange}
          />
        </h2>
      </div>

      <div className="text-center">
        <form onSubmit={onFormSubmit}>
          <input
            className="my-5 p-1 border-solid border-2 border-black outline-none rounded-lg w-80 text-black"
            type="text"
            placeholder="Add a task"
            value={input}
            onChange={onTaskChange}
          />
          <button className={btnstyling} type="submit">
            Add task
          </button>
        </form>
      </div>

      <h1 className="text-3xl my-8 font-semibold text-center">
        Here is Your List of Tasks
      </h1>
      <div className="w-1/2 bg-[#FFFF00] rounded-md mx-auto">
        {todos.map((todo) => (
          <li className="flex justify-center my-3 text-black" key={todo.id}>
            <p
              className={`text-center ${
                todo.completed ? "line-through text-gray-400" : null
              }`}
            >
              {todo.name}
            </p>
            <div className="ml-5 flex space-x-2">
              <button onClick={() => handleComplete(todo)}>
                <FontAwesomeIcon
                  icon="fa-solid fa-square-check"
                  style={{ color: "#23c744" }}
                />
              </button>

              <button
                onClick={() => {
                  handleDelete(todo.id);
                }}
              >
                <FontAwesomeIcon
                  icon="fa-solid fa-trash"
                  style={{ color: "#d91c1c" }}
                />
              </button>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Task;

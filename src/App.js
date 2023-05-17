import React, { useState, useEffect } from "react";
import Task from "./Task";

function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const u = JSON.parse(localStorage.getItem("username"));
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [username, setUsername] = useState(u);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("username", JSON.stringify(username));
  }, [username]);

  return (
    <div>
      <Task
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        btnstyling="bg-[#7CFC00] text-black ml-3 p-1 rounded-lg"
        username={username}
        setUsername={setUsername}
      />
    </div>
  );
}

export default App;

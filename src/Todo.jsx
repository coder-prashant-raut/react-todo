import React, { useEffect, useState } from "react";

function Todo() {
  //All states Are Here
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : []; // Default empty array
  });
  const [date, setDate] = useState("");
  const [deleteBtn, setDeleteBtn] = useState(() => {
    return todos.length >= 3;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleInput = (e) => {
    const input = e.target.value;
    setInputValue(input);
    // console.log(input);
  };

  const addTodoHandlel = () => {
    const newtods = [...todos, inputValue];

    if (!inputValue) {
      alert("todo is emppty please add todo ");
      return;
    }
    if (todos.includes(inputValue)) {
      alert(`${inputValue} Is Already In Your Todo List ! 😳😳`);
      return;
    }

    setTodos(newtods);
    setInputValue("");
  };

  const handledelete = (todo) => {
    //
    console.log(todos);

    console.log(todo);

    const updatedTodo = todos.filter((cur) => cur !== todo); // Explicitly return true for items to keep

    console.log(updatedTodo);

    setTodos(updatedTodo);
  };

  setInterval(() => {
    // consol''e.log(todos);
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString();
    const DT = `${date} - ${time}`;

    setDate(DT);
  }, 1000);

  const deleteAllTodo = () => {
    console.log("delee");

    setTodos([]);
  };
  return (
    <div className="bg-gray-900 h-screen">
      <h1 className="shadow flex justify-center p-2 text-4xl font-bold text-red-500">
        Todo
      </h1>

      <div className="flex justify-center p-4 gap-3.5">
        <input
          type="text"
          value={inputValue}
          onChange={handleInput}
          className="border border-amber-300 text-white p-2 px-3 rounded-2xl outline-blue-500"
        />{" "}
        <button
          className=" cursor-pointer bg-red-500 hover:bg-red-400 px-4 py-2 rounded-3xl"
          onClick={addTodoHandlel}
        >
          Add
        </button>
      </div>
      <h1 className="text-red-300 flex justify-center">{date}</h1>
      {todos.map((todo, key) => (
        <div key={key} className="flex justify-center mt-3 items-center  ">
          <h1 className="flex justify-center items-center bg-amber-200 w-[300px]  p-2 rounded-2xl">
            {todo}
          </h1>
          <button
            onClick={() => {
              handledelete(todo);
            }}
          >
            ❌
          </button>
          <button>➡️</button>
        </div>
      ))}
      <div className="w-full mt-2 flex justify-center items-center">
        <button
          className={`bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition ${
            todos.length > 3 ? "block" : "hidden"
          }`}
          onClick={deleteAllTodo}
        >
          Clear All
        </button>
      </div>
    </div>
  );
}

export default Todo;

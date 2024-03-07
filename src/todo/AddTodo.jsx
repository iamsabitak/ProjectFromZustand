import React, { useState } from "react";

import { store } from "../zustand/store";

function AddTodo() {
  const [input, setInput] = useState("");
  const { addTodo, removeTodo, todos } = store();
  const addtodos = () => {
    addTodo(input);
  };

  const removetodos = (id) => {
    removeTodo(id);
  };

  console.log("stores", todos);

  return (
    <div>
      <input
        type="text"
        name="todos"
        id="todos"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addtodos}>add Todo</button>

      <div>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removetodos(todo.id)}>remove</button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default AddTodo;

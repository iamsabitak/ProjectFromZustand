import React, { useState } from "react";
import { store } from "../zustand/store";

function AddTodo() {
  const [input, setInput] = useState();

  const addtodos = () => store.getState().addTodo({ input, id: Date.now() });

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addtodos}>add Todo</button>
    </div>
  );
}

export default AddTodo;

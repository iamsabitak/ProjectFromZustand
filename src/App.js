import React from "react";
import BearCounter from "./bearcounter/BearCounter";
import { Controls } from "./bearcounter/Controls";
import AddTodo from "./todo/AddTodo";

// import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <BearCounter />
      <Controls />
      {/* <Counter /> */}
      <AddTodo />
    </div>
  );
}

export default App;

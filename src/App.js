import React from "react";
import BearCounter from "./components/BearCounter";
import { Controls } from "./components/Controls";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <BearCounter />
      <Controls />
      <Counter />
    </div>
  );
}

export default App;

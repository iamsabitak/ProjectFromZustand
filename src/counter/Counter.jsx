import React from "react";
import { store } from "../zustand/store";

function Counter() {
  const counter = store((state) => state.count);
  const increase = store((state) => state.increase);
  const decrease = store((state) => state.decrease);
  return (
    <div>
      <button onClick={increase}>add</button>
      <span>{counter}</span>
      <button onClick={decrease}>delete</button>
    </div>
  );
}

export default Counter;

import { store } from "../zustand/store";

export function Controls() {
  const increasePopulation = store((state) => state.increasePopulation);
  return <button onClick={increasePopulation}>one up</button>;
}

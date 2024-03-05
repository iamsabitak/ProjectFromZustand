import { store } from "../zustand/store";

function BearCounter() {
  const bears = store((state) => state.bears);
  return <h1>{bears} around here...</h1>;
}
export default BearCounter;

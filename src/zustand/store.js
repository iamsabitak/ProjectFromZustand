import { create } from "zustand";

export const store = create((set) => ({
  bears: 0,
  count: 0,
  todos: [],
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),

  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),

  addTodo: (text) =>
    set((state) => ({ todos: [...state.todos, { text, id: Date.now() }] })),
  removeTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
}));

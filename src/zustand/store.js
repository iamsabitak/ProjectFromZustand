import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const store = create(
  persist(
    (set, get) => ({
      bears: 0,
      count: 0,
      todos: [],
      increasePopulation: () => set({ bears: get().bears + 1 }),
      removeAllBears: () => set({ bears: 0 }),
      updateBears: (newBears) => set({ bears: newBears }),

      increase: () => set(() => ({ count: get().count + 1 })),
      decrease: () => set((state) => ({ count: state.count - 1 })),

      addTodo: (text) =>
        set((state) => {
          const newTodo = { text, id: Date.now() };
          const updatedTodos = [...state.todos, newTodo];
          localStorage.setItem("todos", JSON.stringify(updatedTodos));
          return { todos: updatedTodos };
        }),
      removeTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
    }),
    {
      name: "bear-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

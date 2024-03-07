import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const store = create(
  persist(
    (set, get) => ({
      bears: 0,
      count: 0,
      todos: [],
      user: [],
      increasePopulation: () => set({ bears: get().bears + 1 }),
      removeAllBears: () => set({ bears: 0 }),
      updateBears: (newBears) => set({ bears: newBears }),

      increase: () => set((state) => ({ count: state.count + 1 })),
      decrease: () => set((state) => ({ count: state.count - 1 })),

      addTodo: (text) =>
        set((state) => ({ todos: [...state.todos, { text, id: Date.now() }] })),
      removeTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      addName: (name) =>
        set((state) => {
          const newName = { name, id: Date.now() };
          const updatedname = [...state.user, newName];
          return { user: updatedname };
        }),
      removeName: (id) =>
        set((state) => ({
          user: state.user.filter((name) => name.id !== id),
        })),
    }),
    {
      name: "storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

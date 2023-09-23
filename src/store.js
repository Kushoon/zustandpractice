import { create } from "zustand";

const toDoStore = (set) => ({
  // state data and actions will go here
  counter: 0,
  increaseCounter: () => set((state) => ({ counter: state.counter + 1 })),
  decreaseCounter: () => set((state) => ({ counter: state.counter - 1 })),
});

const notesStore = (set) => ({
  notes: ["note 1", "note 2"],
  addNotes: (note) => set((state) => ({ notes: [...state.notes, note] })),
});

export const useToDoStore = create(toDoStore);
export const useNoteStore = create(notesStore);

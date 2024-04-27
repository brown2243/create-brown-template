import { create } from "zustand";

interface IUseStore {
  counter: number;
  increaseCounter: () => void;
}

const useStore = create<IUseStore>()((set) => ({
  counter: 0,
  increaseCounter: () => set((state) => ({ counter: state.counter + 1 })),
}));

export default useStore;

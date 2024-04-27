import { create } from "zustand";

interface IUseBasicStore {
  counter: number;
  increaseCounter: () => void;
}

const store = create<IUseBasicStore>()((set) => ({
  counter: 0,
  increaseCounter: () => set((state) => ({ counter: state.counter + 1 })),
}));

const useSelector = store;

export default useSelector;

import { create } from "zustand";
interface ICountStore {
  count: number;
  setCount: (count: number) => void;
  products: any[];
  setProducts: (products: any[]) => void;
}

export const useCountStore = create<ICountStore>((set) => ({
  count: 0,
  setCount: (count: number) => set({ count }),
  products: [],
  setProducts: (products) => set({ products }),
}));

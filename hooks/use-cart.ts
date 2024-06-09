/* eslint-disable react-hooks/rules-of-hooks */
import toast from "react-hot-toast";
import { Product } from "@/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CartProps {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartProps>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;

        const existingItems = currentItems.find((item) => item.id === data.id);

        if (existingItems) {
         return  toast.error("Item already in Cart.");
        }

        set({ items: [...get().items, data] });

        toast.success("Item added to Cart.");
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });

        toast.success("Item removed from Cart.");
      },
      removeAll: () => {
        set({ items: [] });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;

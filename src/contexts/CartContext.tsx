import { createContext, useContext, useMemo, useState } from "react";
import type { Product } from "../types/Product";

type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  total: number;
  add: (product: Product) => void;
  increase: (productId: number) => void;
  decrease: (productId: number) => void;
  remove: (productId: number) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  function add(product: Product) {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  }

  function increase(productId: number) {
    setItems((prev) =>
      prev.map((i) =>
        i.product.id === productId ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  }

  function decrease(productId: number) {
    setItems((prev) =>
      prev
        .map((i) =>
          i.product.id === productId ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0)
    );
  }

  function remove(productId: number) {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  }

  const total = useMemo(() => {
    return items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }, [items]);

  const value = useMemo(
    () => ({ items, total, add, increase, decrease, remove }),
    [items, total]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart deve ser usado dentro de <CartProvider />");
  return ctx;
}

import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { cartState, budgetState } from "../atoms";

export function useCart() {
  const [cart, setCart] = useRecoilState(cartState);
  const [budget, setBudget] = useRecoilState(budgetState);

  const addToCart = useCallback(
    (book) => {
      setCart((currentCart) => [...currentCart, book]);
      setBudget((currentBudget) => currentBudget - book.price);
    },
    [setCart, setBudget]
  );

  return { cart, budget, addToCart };
}

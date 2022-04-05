import { selector } from "recoil";
import { budgetState, cartState } from "./atoms";

export const addToCart = selector({
  key: "addToCartState",
  get: ({ get }) => {},
  set: ({ set, get }, book) => {
    set(cartState, [...get(cartState), book]);
    set(budgetState, get(budgetState) - book.price);
  },
});

import { atom } from "recoil";

export const booksState = atom({
  key: "booksState",
  default: [
    { name: "Harry Potter", price: 10 },
    { name: "Game of Thrones", price: 15 },
    { name: "War and Peace", price: 20 },
    { name: "Hamlet", price: 23 },
  ],
});

export const cartState = atom({
  key: "cartState",
  default: [],
});

export const budgetState = atom({
  key: "budgetState",
  default: 100,
});

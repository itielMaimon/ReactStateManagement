import { atom } from "recoil";

export const booksSate = atom({
  key: "booksSate",
  default: [
    { name: "Harry Potter", price: 10 },
    { name: "Game of Thrones", price: 15 },
    { name: "War and Peace", price: 20 },
    { name: "Hamlet", price: 23 },
  ],
});

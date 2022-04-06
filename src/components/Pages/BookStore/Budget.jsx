import React from "react";
import { useRecoilValue } from "recoil";
import { budgetState } from "./atoms";

const Budget = () => {
  const budget = useRecoilValue(budgetState);

  return <h2>Your budget is: {budget}$</h2>;
};

export default Budget;

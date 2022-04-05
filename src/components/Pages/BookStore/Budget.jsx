import React, { useState } from "react";

const Budget = () => {
  const [budget, setBudget] = useState(100);

  return <h2>Your budget is: {budget}$</h2>;
};

export default Budget;

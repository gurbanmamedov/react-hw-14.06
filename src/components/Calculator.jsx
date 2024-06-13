import React from "react";

const Calculator = ({ num1, num2 }) => {
  const sum = num1 + num2;
  return (
    <div>
      <h2>Calculator</h2>
      <p>
        The sum of {num1} and {num2} is {sum}
      </p>
    </div>
  );
};

export default Calculator;

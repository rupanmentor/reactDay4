import React, { useState } from "react";

const CompA = () => {
  const [item, setItem] = useState(0);

  const handleInc = () => {
    setItem((item) => item + 1);
  };
  const handleDec = () => {
    if (item > 0) {
      setItem((item) => item - 1);
    }
  };
  return (
    <div>
      <h1>Cart Component</h1>
      <h1>Cart Value: {item}</h1>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
    </div>
  );
};

export default CompA;

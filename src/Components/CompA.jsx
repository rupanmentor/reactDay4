import React, { useState } from "react";

const CompA = () => {
  const [item, setItem] = useState(0);
  const [status, setStatus] = useState(true);

  const handleInc = () => {
    setStatus(false);
    setItem((item) => item + 1);
  };
  const handleDec = () => {
    setStatus(true);
    if (item > 0) {
      setItem((item) => item - 1);
    }
  };
  return (
    <div>
      <h1>Cart Component</h1>
      <h1>Cart Value: {item}</h1>
      {status ? (
        <button onClick={handleInc}>Add To Cart</button>
      ) : (
        <button onClick={handleDec}>Remove From Cart</button>
      )}
    </div>
  );
};

export default CompA;

import axios from "axios";
import React, { useEffect, useState } from "react";

const CompC = () => {
  const [item, setItem] = useState([]);
  const [cart, setCart] = useState(0);
  const [status, setStatus] = useState(true);

  const handleInc = () => {
    setStatus(false);
    setCart((cart) => cart + 1);
  };
  const handleDec = () => {
    setStatus(true);
    if (cart > 0) {
      setCart((cart) => cart - 1);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setItem(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {item.map((ele, index) => {
        return (
          <div key={index} className="card">
            <h1>{ele.title}</h1>
            <img src={ele.image} alt="" />
            <h1>{ele.price}</h1>
            <p>{ele.description}</p>
            <p>{ele.category}</p>
            {status ? (
              <button onClick={handleInc}>Add To Cart</button>
            ) : (
              <button onClick={handleDec}>Remove From Cart</button>
            )}
          </div>
        );
      })}
    </>
  );
};

export default CompC;

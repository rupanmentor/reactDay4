import React, { useState } from "react";
import CompA from "./Components/CompA";
import CompB from "./Components/CompB";

const App = () => {
   
  const [comp , setComp] = useState(true)
  
   const handleSubmit = () =>{
      setComp(!comp)
   }

  return (
    <div>
      {/* <CompA /> */}
      <button onClick={handleSubmit}>
       {comp ? "mounting" : "unmounting"}
      </button>
      {comp && <CompB />}
    </div>
  );
};

export default App;

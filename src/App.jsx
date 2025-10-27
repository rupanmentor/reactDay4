import React, { useState } from "react";
import CompA from "./Components/CompA";
import CompB from "./Components/CompB";
import CompC from "./Components/CompC";

const App = () => {
   
  // const [comp , setComp] = useState(true)
  
  //  const handleSubmit = () =>{
  //     setComp(!comp)
  //  }

  return (
    <div>
      {/* <CompA /> */}
      {/* <button onClick={handleSubmit}>
       {comp ? "mounting" : "unmounting"}
      </button>
      {comp && <CompB />} */}
      <CompC />
    </div>
  );
};

export default App;

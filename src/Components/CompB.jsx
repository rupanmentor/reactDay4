import React, { useEffect } from 'react';

const CompB = () => {

   console.log("Outside UseEffect");
   

    useEffect(()=>{
        //mounting Phase
        const interval = setInterval(()=>{
            console.log("Data fetching")
        },2000)
        //unmounting phase
         return () =>{
             console.log("Clear Up");
             clearInterval(interval);
         }

    },[])



    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
};

export default CompB;
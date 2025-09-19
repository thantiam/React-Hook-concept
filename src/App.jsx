import { useState, useEffect, useMemo } from "react";

   function largeFunction() {
           console.log("Calling some value...");
          return "some value...";
      //console.log("React Hook ...");
   }

export default function App() {

      const [ count, setCount ] = useState(0);
           
           const value = useMemo( () => {
             return largeFunction();
           }, [] )

        useEffect( () => {
           largeFunction();
        }, [] )

              //largeFunction();

           //console.log("React Hook ..."); /** run every time */

  return <div>

           Hello Hook ... <b>( {count} )</b> <br /> <br /> <br />

           <button onClick={ () => setCount(count + 1) } >Increase</button>

           <br /><br /><br />

           <span>{value}</span>

         </div>
              
}
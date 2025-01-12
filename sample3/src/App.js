import Counter from "./Counter";
import { useState } from "react";

function App() {
  const [state, setstate] = useState(false)
  return (
    <div >
     
    
    <h1 onClick={()=>setstate(!state)}> touch</h1>
    {state ? <Counter/> : null}
    </div>
  );
}
{/* MOUNTING
  UPDATING
  UNMOUNTING*/}

export default App;

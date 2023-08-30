
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [value, setValue] = useState(0);
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Sum Calculator</h1>
        <input type="number" onChange={(e)=>{setValue(value+(parseInt(e.target.value)))}}></input>
        <p>Sum: {value}</p>
    </div>
  )
}

export default App

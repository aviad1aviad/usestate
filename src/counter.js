import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(1)
    const [delta, setDelta] = useState(1)
    function incr(){
        setCount (
            function (oldCount) {
                return oldCount + delta
            }
        )
        console.log(count)  
    }
    function reset() {
      setCount(0)
        }
    function handleDelta(e) {
      setDelta(Number(e.target.value))
    }    
    
    return (
      <div>
        <h1> counter </h1>
        <input type= "number" value = {delta} onChange = {handleDelta}/>
        <p> Counter is at {count} </p>
      <button onClick={incr}> Click to add {delta} to counter </button>
      <p> reset </p>
      <button onClick={reset}> click to reset the cunter </button>
      </div>
    );
  }
  
  export default Counter;
import { useState } from "react";
function Counter(props) {
    const {delta, maxCounter} = props
    const [count, setCount] = useState(1)
    function incr(){
        setCount (
            function (oldCount) {
              if (oldCount + delta >maxCounter) return 0  
              return oldCount + delta
            }
        )
        console.log(count)  
    }
    function reset() {
      setCount(0)
        }
    
    return (
      <div>
        <h1> counter </h1>
        <p> Counter is at {count} </p>
      <button onClick={incr}> Click to add {delta} to counter </button>
      <p> reset </p>
      <button onClick={reset}> click to reset the cunter </button>
      </div>
    );
  }
  
  export default Counter;
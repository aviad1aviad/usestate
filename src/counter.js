import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(1)
    function incr(){
        setCount (
            function (oldCount) {
                return oldCount +1
            }
        )
        console.log(count)  
    }
    function reset() {
      setCount(
        function(oldCount){
          return oldCount = 0
        }
      )
    }
    return (
      <div className="App">
        <h1> counter </h1>
        <p> Counter is at {count} </p>
      <button onClick={incr}> Click to add 1 to counter </button>
      <p> reset </p>
      <button onClick={reset}> click to reset the cunter </button>
      </div>
    );
  }
  
  export default Counter;
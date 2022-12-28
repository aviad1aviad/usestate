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
    return (
      <div className="App">
        <h1> counter </h1>
        <p> Counter is at {count} </p>
      <button onClick={incr}> Click to add 1 to counter </button>
      </div>
    );
  }
  
  export default Counter;
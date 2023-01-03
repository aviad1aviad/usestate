import { useState, useEffect} from "react";
function Counter(props) {
    const {delta, maxCounter, getReset, needToReset, getCounter} = props
    const [count, setCount] = useState(1)
    
    useEffect(() => {

      if (needToReset){
        setCount(0)
        getReset(false)
      }
    },[needToReset,getReset])
    
    function incr(){
        setCount (
            function (oldCount) {
              if (oldCount + delta >maxCounter) {
                getCounter(0)
                return 0
              }  
              getCounter (oldCount + delta)
              return oldCount + delta
            }
        )
        console.log(count)  
    }
    function reset() {
      getReset(true)
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
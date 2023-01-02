import './App.css';
import Counter from './counter.js';
import { useState } from 'react';


function App() {
  const [delta, setDelta] = useState(1)
  const [maxCounter,setMaxCounter] = useState (10)
  const [reset, setReset] = useState(false)

  function handleDelta(e) {
    setDelta(Number(e.target.value))
    }
  function handleMax (e) {
    setMaxCounter(Number(e.target.value))
  }   
  function getReset(data){
    console.log(data)
    setReset(data)
  }


  return (
    <div className="App">
      delta
      <p/>
      <input type= "number" value = {delta} onChange = {handleDelta}/>
      <p/>
      maxCounter
      <p/>
      <input type = "number" value = {maxCounter} onChange = {handleMax}/>
      <Counter delta = {delta} maxCounter = {maxCounter} getReset = {getReset} needToReset = {reset}/>
      <Counter delta = {delta} maxCounter = {maxCounter} getReset = {getReset} needToReset = {reset}/>
    </div>
  );
}

export default App;


import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);


  const addValue = () =>{
    if(counter < 20){
      // counter++;
      // setCounter(counter++)
      setCounter((prevCounter) => prevCounter+1) 
      setCounter((prevCounter) => prevCounter+1) 
      setCounter((prevCounter) => prevCounter+1) 
      setCounter((prevCounter) => prevCounter+1) 
      setCounter(counter => counter+1)
    }
  }
  const removeValue = () =>{
    if(counter > 0){
      counter-=1;
      setCounter(counter);
    }
  }
  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Increase Value</button>
      <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App

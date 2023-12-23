import { useState } from 'react'
import './App.css'

function App() {
  
  // let counter = 5;

  let [counter,setCounter] = useState(5)  // useState hook

  const addValue = ()=>{
    // counter++;                   counter = 5
    // console.log(counter)

    setCounter(counter+1)           // counter = counter+1 = 6
    setCounter(counter+1)           // counter = counter+1 = 6 
    setCounter(counter+1)           // As we know fibre(virualDOm) send changes in batches 
    setCounter(counter+1)
    // IMP Interview Question
    setCounter(preCounter=>preCounter+1)       // Here we are using the previous value of 
    setCounter(preCounter=>preCounter+1)       // counter from setCounter CallBack funtion
    setCounter(preCounter=>preCounter+1)       // counter = counter+3 = 9
    
  }

  const subValue = ()=>{
    counter--;
    if(counter<0) counter = 0;
    setCounter(counter)
  }

  // we cant use the varible by reference in html tag from javascript in react for that react uses States which 
  // is basically used for changing the state of our varible (everywhere in project at onnes) were it is used.
  
  return (
    <>
      <h1>Hello omiii, Counter Game is here:</h1>
      <h1>Counter Value: {counter}</h1>
      <button onClick={addValue} >increment</button>
      <br></br>
      <br></br>
      <button onClick={subValue}>decrement</button>
    </>
  )
}

export default App

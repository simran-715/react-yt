import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10);

  const [arr, setArr] = useState(['fruit', 'vegetables', 'garlic']);
  
  const [obj, setobj] = useState({ name: "simran", gender: "female", age: 19 })
  
  const ChangeObj = () => {
    setobj(prev => ({ ...prev, age: 7 }));

  }

  const ChangeArr = () => {
    setArr(prev => [...prev, "guava", "pinepple"]);
  }




  const ChangeNum = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <h2>{arr.join(', ')}</h2>
      <h2>{obj.age}</h2>
      <button onClick={ChangeNum}>click</button>
      <button onClick={ChangeArr}>click2</button>
      <button onClick={ChangeObj}>click3</button>
    </>
  )
}

export default App

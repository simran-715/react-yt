import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  
    function Increment() {
      setCount(count + 1)
    }
  
  
  
    function Decrement() {
      setCount(count - 1)
    }
  


  return (
    
    <>
      <div className='flex flex-col justify-between items-center w-[100vw] h-[100vh] p-40 bg-amber-900'>
        
        <div className='px-40 py-20 text-center bg-amber-400 text-9xl rounded-full font-bold'>{count}</div>
        
        <div className='flex justify-between gap-30'>
            
          <button onClick={Decrement} className='px-10 py-5 text-center bg-orange-500 text-4xl rounded-full'>Decrease</button>
          <button onClick={Increment} className='px-10 py-5 text-center bg-orange-500 text-4xl rounded-full'>Increase</button>
        </div>

      </div>
       
  
    </>
  )
}

export default App

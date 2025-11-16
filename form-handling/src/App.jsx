import React from 'react';
import { useState } from 'react';
import './App.css'

function App() {
  
  const [title, setTitle] = useState('');


  const submitForm = (e) => {
    e.preventDefault();
    console.log(`form submitted by ${title}!!`);
    setTitle('')
  }

  return (
    <>
      <form onSubmit={ submitForm}>
        
        <input
          type='text' placeholder='Enter Your Name'
          value={title} onChange={(e) => {
            setTitle(e.target.value); 
            console.log(e.target.value);
          } }/>
        <button type="submit">Submit</button>
      </form>  
    </>
  )
}

export default App

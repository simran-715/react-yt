import React from 'react'
import Hero from './Hero.jsx'
import Arrow from './Arrow.jsx'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between bg-white w-1/3'>
      <Hero />
      <Arrow/>

      
    </div>
  )
}

export default LeftContent


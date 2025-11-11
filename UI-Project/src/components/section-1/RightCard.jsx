import React from 'react'
import { ArrowRight } from 'lucide-react';

const RightCard = (props) => {
  return (
    <div className='relative w-1/3 h-full overflow-hidden rounded-4xl min-w-[330px] '>

      <img className='object-cover h-full' src={props.img}></img>

      <div className='absolute top-0 bottom-0 h-full w-full flex flex-col justify-between p-7'>

        <h1 className=' bg-white rounded-[49%] text-3xl w-14 h-13 text-center py-2'>{props.id+1}</h1>

        <div>
          <p className=' text-white text-xl my-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolores suscipit corrupti.</p>
          
          <div className='flex justify-between items-center'>
            
            <button className='bg-blue-500 text-2xl text-white  px-8 py-2 rounded-3xl'>{props.text}</button>
          
            <button className='bg-blue-500 p-2.5 rounded-[22px] text-white'><ArrowRight /></button>
        
          </div>
        </div>

        
      </div>

    </div>
  )
}

export default RightCard

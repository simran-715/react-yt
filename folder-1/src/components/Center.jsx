import React from 'react'

const Center = (props) => {
  return (
    <div className='center'>
      <div>
        <h3>{props.compName}</h3>
        <h6>{props.duration}</h6>
        </div>
      <h3>{props.desig}</h3>
      <div>
        <button>{props.type}</button>
        <button>{props.level}</button>
      </div>
    </div>
  )
}

export default Center

import React from 'react'

const Center = (props) => {
  return (
    <div className='center'>
      <div>
        <h3>Amazon</h3>
        <h6>3 days ago</h6>
        </div>
      <h3>{props.desig}</h3>
      <div>
      <button>Part-Time</button>
      <button>Senior Level</button>
      </div>
    </div>
  )
}

export default Center

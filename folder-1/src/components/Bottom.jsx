import React from 'react'

const Bottom = (props) => {
  return (
    <div className='bottom'>
      <div>
        <h4>{props.pay}</h4>
        <h6>{props.location}</h6>
      </div>
      <button>Apply Now</button>
    </div>
  )
}

export default Bottom

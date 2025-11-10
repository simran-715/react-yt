import React from 'react'
import Top from "./Top.jsx"
import Center from "./Center.jsx"
import Bottom from './Bottom.jsx'
import "./Card.css"

const Card=(props)=>{
  return (
    <>
      <div className="card">
        <Top {...props} />
        <Center {...props} />
        <hr/>
        <Bottom {...props} />

      </div>
    </>
  )
}

export default Card

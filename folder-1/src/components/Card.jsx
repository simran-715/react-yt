import React from 'react'
import Top from "./Top.jsx"
import Center from "./Center.jsx"
import Bottom from './Bottom.jsx'
import "./Card.css"

const Card=(props)=>{
  return (
    <>
      <div className="card">
        <Top />
        <Center {...props} />
        <Bottom />

      </div>
    </>
  )
}

export default Card

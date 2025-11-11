import React from 'react'
import Section1 from "./components/section-1/Section1.jsx"
import Section2 from "./components/section-2/Section2.jsx"

const App = () => {
   
  const users = [
    {
      no:"1",
      img:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
      text:"Underserved"
    },
    {
      no: "2",
      img: "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
      text:"Satisfied"
    },
   
    {
      no: "3",
      img: "https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
      text:"Underbanked"
    },
    {
      no:"1",
      img:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
      text:"Underserved"
    },
    {
      no: "2",
      img: "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
      text:"Satisfied"
    },
   
    {
      no: "3",
      img: "https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
      text:"Underbanked"
    }
     
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
      
      
    </div>
  )
}

export default App


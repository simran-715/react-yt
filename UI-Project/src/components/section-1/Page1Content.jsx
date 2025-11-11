import React from 'react'
import LeftContent from './LeftContent.jsx'
import RightContent from "./RightContent.jsx"

const Page1Content = (props) => {
  return (
    <div className='flex justify-between items-center gap-10 px-10 py-15 h-[88.5vh]'>
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content


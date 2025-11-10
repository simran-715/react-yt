import React from 'react'

const top = (props) => {
  return (
    <div className="top">
      <img src={props.compLogo}></img>

      <button>
        <p>Save</p>
        <img src="https://png.pngtree.com/png-clipart/20210308/original/pngtree-line-icon-save-png-image_5784773.jpg"></img> 
      </button>      
    </div>
  )
}

export default top

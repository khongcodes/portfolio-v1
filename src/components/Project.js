import React, { useState } from 'react'

const Project = ({informListStatus, projectId}) => {
  const [color, setColor] = useState('pink')

  const toggleStatus = () => {
    let informed = {};
    if (color === 'pink') {
      informed = {color:'green', pass:projectId}
    } else {
      informed = {color:'pink', pass:0}
    }
    setColor(informed.color);
    informListStatus(informed.pass);
  }

  return (
    <div
      style={{width:20, height:20, backgroundColor:color}}
      onClick = {toggleStatus}
    >

    </div>
  )
}

export default Project
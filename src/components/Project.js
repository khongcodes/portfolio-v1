import React, { useState } from 'react'

import projectStyles from '../styles/Project.module.scss'

const Project = ({informListStatus, projectId, active}) => {
  const handleClick = () => {
    informListStatus(active ? 0 : projectId);
  }

  const getColor = () => active ? 'green' : 'pink'

  return (
    <div
      style={{width:20, height:20, backgroundColor:getColor()}}
      onClick = {handleClick}
    >

    </div>
  )
}

export default Project
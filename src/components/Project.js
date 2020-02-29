import React, { useState } from 'react'

import projectStyles from '../styles/Project.module.scss'

const Project = ({
  informListStatus, projectId, active, 
  name, description, tech
}) => {

  const handleClick = () => {
    informListStatus(active ? 0 : projectId);
  }

  // const getColor = () => active ? 'green' : 'pink'

  return (
    <div className={projectStyles.projectTitleContainer} onClick = {handleClick}>
      <h3 className={projectStyles.title}> {name}</h3>
      <p className={projectStyles.description}> {description}</p>
    </div>
  )
}

export default Project
import React from 'react'

import projectStyles from '../styles/Project.module.scss'

const ExpandedProject = ({active}) => {
  if (active) {
    return (
      <div className={projectStyles.expandedProject}>
        expanded
      </div>
    )
  } else {
    return (
      <div>
      </div>
    )
  }
}

const Project = ({
  informListStatus, projectId, active, 
  name, description, tech
}) => {

  const handleClick = () => {
    informListStatus(active ? 0 : projectId);
  }

  return (
    <div className={projectStyles.projectTitleContainer} onClick = {handleClick}>
      <h3 className={projectStyles.title}> {name} </h3>
      <p className={projectStyles.description}> {description} </p>

      <div className={projectStyles.techList}>
        {tech.map(string => (
          <div className={projectStyles.tech}> {string} </div>
        ))}
      </div>

      <ExpandedProject active={active}/>
    </div>
  )
}

export default Project
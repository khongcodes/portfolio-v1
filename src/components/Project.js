import React from 'react'

import projectStyles from '../styles/Project.module.scss'

const ExpandedProject = ({active, name, img, git, live, youtube}) => {
  if (active) {
    console.log(img)
    console.log(git)
    console.log(live)
    console.log(youtube)
    return (
      <div className={projectStyles.expandedProject}>
        <img src={img} alt={name}/>
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
  informListStatus, id, active,
  name, description, tech,
  ...expandedProjData
}) => {

  const handleClick = () => {
    informListStatus(active ? 0 : id);
  }

  return (
    <div 
      className={!active ? projectStyles.projectTitleContainer : projectStyles.projectTitleContainerSelected}
      onClick = {handleClick}
    >
      <h3 className={projectStyles.title}> {name} </h3>
      <p className={projectStyles.description}> {description} </p>

      <div className={projectStyles.techList}>
        {tech.map(string => (
          <div key={string} className={projectStyles.tech}> {string} </div>
        ))}
      </div>

      <ExpandedProject 
        active = {active}
        name = {name}
        {...expandedProjData}
      />
    </div>
  )
}

export default Project
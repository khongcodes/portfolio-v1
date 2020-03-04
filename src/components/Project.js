import React from 'react'

import projectStyles from '../styles/Project.module.scss'

const LinkButton = ({text, link}) => (
  link !== "" ? 
    <a href={link}>
      <div className={projectStyles.linkButton}>
        {text}
      </div>
    </a>
  :
    <div>
    </div>
)

const ExpandedProject = ({active, id, name, img, git, live, youtube}) => {
  if (active) {
    return (
      <div 
        className = {projectStyles.expandedProject}
        role = 'tabpanel'
        id = {`panel-${id}`}
        aria-labelledby = {`tab-${id}`}
      >
        <div className={projectStyles.imgContainer}>
          <img src={img} alt={name}/>
        </div>

        <div className={projectStyles.buttonList}>
          <LinkButton text="Git" link={git}/>
          <LinkButton text="Video" link={youtube}/>
          <LinkButton text="Live" link={live}/>
        </div>
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

  const toggleActive = () => {
    informListStatus(active ? 0 : id);
  }

  return (
    <div>
      <div 
        className={!active ? projectStyles.projectTitleContainer : projectStyles.projectTitleContainerSelected}
        onClick = {toggleActive}
        onKeyPress = {event => {
          if (event.key === 'Enter') {
            toggleActive()
          }
        }}

        role = "tab"
        tabIndex = "0"
        aria-selected = {active}
        aria-controls = {`panel-${id}`}
        id = {`tab-${id}`}
      >
        <h3 className={projectStyles.title}> {name} </h3>
        <p className={projectStyles.description}> {description} </p>

        <div className={projectStyles.techList}>
          {tech.map(string => (
            <div key={string} className={projectStyles.tech}> {string} </div>
          ))}
        </div>
      </div>

      <ExpandedProject 
        active = {active}
        name = {name}
        id = {id}
        {...expandedProjData}
      />
    </div>
  )
}

export default Project
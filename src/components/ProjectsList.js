import React, { useState } from 'react';

import Project from './Project';
import siteData from '../data/siteData';

// import invitationImg from '../images/invitation.png';
// import heroImg from '../images/hero-s-journey-spread.png';
// import wanderingImg from '../images/wandering.png';
// import itchImg from '../images/itchscraper.png';

const ProjectsList = () => {
  const [cursorProject, setCursorProject] = useState(0)
  const [selectedProject, setSelectedProject] = useState(0)

  const cursorCallback = id => setCursorProject(id)
  const activeCallback = id => setSelectedProject(id)

  // const imgArray = [invitationImg, heroImg, wanderingImg, itchImg]

  return (
    <div 
      role="tablist"
      tabIndex = '0'
      onMouseLeave = {() =>setCursorProject(0)}
    >
      {siteData.projects.map(proj => (
        <Project
          key = {proj.name}
          informListActive = {activeCallback}
          informListCursor = {cursorCallback}
          active = {selectedProject === proj.id}
          cursorActive = {cursorProject === proj.id}
          imgSlug = {proj.imgSlug}
          {...proj}
        />
      ))}
    </div>
  )
}

export default ProjectsList
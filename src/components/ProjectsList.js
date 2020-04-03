import React, { useState } from 'react';

import Project from './Project';
import siteData from '../data/siteData';


const ProjectsList = () => {
  const cursorGifIsOn = siteData.cursorGifIsOn;

  const [cursorProject, setCursorProject] = useState(0)
  const [selectedProject, setSelectedProject] = useState(0)

  const cursorCallback = id => setCursorProject(id)
  const activeCallback = id => setSelectedProject(id)

  return (
    <div
      style = {{outline: "none"}} 
      role = "tablist"
      tabIndex = '-1'
      onMouseLeave = {() =>setCursorProject(0)}
    >
      {siteData.projects.map(proj => (
        <Project
          key = {proj.name}
          informListActive = {activeCallback}
          informListCursor = {cursorCallback}
          active = {selectedProject === proj.id}
          cursorActive = {cursorGifIsOn && cursorProject === proj.id}
          imgSlug = {proj.imgSlug}
          {...proj}
        />
      ))}
    </div>
  )
}

export default ProjectsList
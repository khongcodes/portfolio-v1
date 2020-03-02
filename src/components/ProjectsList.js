import React, { useState } from 'react';

import Project from './Project';
import projectData from '../data/projectData';

const ProjectsList = () => {
  const [selectedProject, setSelectedProject] = useState(0)

  const listCallback = id => setSelectedProject(id)

  return (
    <div>
      {projectData.projects.map(proj => (
        <Project 
          informListStatus = {listCallback}
          active = {selectedProject === proj.id}
          {...proj}
        />
      ))}
    </div>
  )
}

export default ProjectsList
import React, { useState } from 'react';

import Project from './Project';

const ProjectsList = () => {
  const [selectedProject, setSelectedProject] = useState(0)

  return (
    <div>
      {selectedProject}
      <Project projectId={1} informListStatus={ id => setSelectedProject(id) }/>
      <Project projectId={2} informListStatus={ id => setSelectedProject(id) }/>
      <Project projectId={3} informListStatus={ id => setSelectedProject(id) }/>
      <Project projectId={4} informListStatus={ id => setSelectedProject(id) }/>

      
    </div>
  )
}

export default ProjectsList
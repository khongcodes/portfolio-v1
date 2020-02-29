import React, { useState } from 'react';

import Project from './Project';

const ProjectsList = () => {
  const [selectedProject, setSelectedProject] = useState(0)

  const listCallback = id => setSelectedProject(id)

  return (
    <div>
      {selectedProject}
      <Project 
        projectId={1} active={selectedProject === 1} informListStatus={ listCallback }
        name = 'Invitation'
        description = 'lorem ipsum blah blah blah'
        tech = {['a', 'b', 'c']}
      />

      <Project
        projectId={2} active={selectedProject === 2} informListStatus={ listCallback }
        name = "Hero's Journey Spread"
        description = 'lorem ipsum blah blah blah2'
        tech = {['']}
      />

      <Project projectId={3} active={selectedProject === 3} informListStatus={ listCallback }
        name = 'Wandering'
        description = ''
      />

      <Project projectId={4} active={selectedProject === 4} informListStatus={ listCallback }
        name = 'ItchScraper'
        description = ''
      />
    </div>
  )
}

export default ProjectsList
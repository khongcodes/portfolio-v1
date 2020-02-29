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
        description = 'A web app for creating shareable event info pages, uncoupled from social media'
        tech = {['React.js', 'Redux', 'Rails', 'Google Maps API']}
      />

      <Project
        projectId={2} active={selectedProject === 2} informListStatus={ listCallback }
        name = "Hero's Journey Spread"
        description = 'A storytelling game driven by drawing and interpreting tarot cards'
        tech = {['Rails', 'CSS', 'JavaScript']}
      />

      <Project projectId={3} active={selectedProject === 3} informListStatus={ listCallback }
        name = 'Wandering'
        description = 'A browser-text-based rogue-lite game exploring abandoned spaces'
        tech = {['Ruby', 'Rails', 'SQLite']}
      />

      <Project projectId={4} active={selectedProject === 4} informListStatus={ listCallback }
        name = 'ItchScraper'
        description = 'CLI application for browsing Itch.io'
        tech = {['Ruby', 'Nokogiri']}
      />
    </div>
  )
}

export default ProjectsList
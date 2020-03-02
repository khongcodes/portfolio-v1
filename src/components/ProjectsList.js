import React, { useState } from 'react';

import Project from './Project';
import projectData from '../data/projectData';

import invitationImg from '../images/invitation.png';
import wanderingImg from '../images/wandering.png';
import heroImg from '../images/hero-s-journey-spread.png';
import itchImg from '../images/itchscraper.png';

const ProjectsList = () => {
  const [selectedProject, setSelectedProject] = useState(0)

  const listCallback = id => setSelectedProject(id)

  const imgArray = [invitationImg, wanderingImg, heroImg, itchImg]

  return (
    <div>
      {projectData.projects.map((proj, index) => (
        <Project
          key = {proj.name}
          informListStatus = {listCallback}
          active = {selectedProject === proj.id}
          img = {imgArray[index]}
          {...proj}
        />
      ))}
    </div>
  )
}

export default ProjectsList
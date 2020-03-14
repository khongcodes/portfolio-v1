import React, { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";

import projectStyles from '../styles/Project.module.scss'

const LinkButton = ({text, link}) => (
  link !== "" ? 
    <a href={link} tabIndex="-1">
      <div 
        className = {projectStyles.linkButton} 
        onKeyPress = { event => {
          if (event.key === 'Enter') {
            window.open(link, '_blank');
          }
        }}
        tabIndex = "0"
        role = "link"
      >
        {text}
      </div>
    </a>
  :
    <>
    </>
)

const CursorImage = ({active}) => {
  return (
    active ? 
      <img className={projectStyles.cursor} src='https://media0.giphy.com/media/lae7QSMFxEkkE/source.gif' />
      :
      <img hidden/>
  )
}

const ExpandedProject = ({active, id, name, imgSlug, git, live, youtube}) => {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(filter: {internal: {mediaType: {regex: "/image/"}}, relativePath: {regex: "/^((?!favicon).)/"}}) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth:800) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    `
  )

  const matchImage = useMemo(() => (
    data.allFile.edges.find(({ node }) => node.relativePath === imgSlug)
  ), [data, imgSlug])

  if (active) {

    return (
      <div 
        className = {projectStyles.expandedProject}
        role = 'tabpanel'
        id = {`panel-${id}`}
        aria-labelledby = {`tab-${id}`}
      >
        <div className={projectStyles.imgContainer}>
          <Img fluid={matchImage.node.childImageSharp.fluid} alt={name}/>
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
  informListActive, informListCursor,
  id, active, cursorActive,
  name, description, tech,
  ...expandedProjData
}) => {

  const toggleCursor = () => {
    informListCursor(id)

  }

  const toggleActive = () => {
    informListActive(active ? 0 : id);
  }

  return (
    <div className={projectStyles.topContainer}>
      <div
        className={projectStyles.cursorContainer}
      >
        <CursorImage active={cursorActive}/>
      </div>

      <div 
        className={!active ? projectStyles.projectTitleContainer : projectStyles.projectTitleContainerSelected}
        onClick = {toggleActive}
        onKeyPress = {event => {
          if (event.key === 'Enter') {
            toggleActive()
          }
        }}
        onMouseOver = {toggleCursor}
        onFocus = {toggleCursor}

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
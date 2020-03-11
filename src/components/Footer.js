import React, { useState } from 'react';

import siteData from '../data/siteData';
import footerStyles from "../styles/footer.module.scss";

const gitHubIcon = require('simple-icons/icons/github');
const linkedInIcon = require('simple-icons/icons/linkedin');
const twitterIcon = require('simple-icons/icons/twitter');
const mediumIcon = require('simple-icons/icons/medium');

const ListLink = props => (
  props.to !== "" ? 
    <li className={footerStyles.iconLink}>
      <a href={props.to} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    </li>
  :
  <></>
)

const Icon = ({iconColor, altColor, iconSize, path}) => {
  const [color, setColor] = useState(iconColor)

  return (
    <svg
      width = {iconSize}
      height = {iconSize}
      fill = {color}
      viewBox = {`0 0 ${iconSize} ${iconSize}`}
      onMouseOver = { () => setColor(altColor) }
      onFocus = { () => setColor(altColor) }
      onMouseLeave = { () => setColor(iconColor) }
      role = "link"
      tabIndex = "0"
    >
      <path d={path} />
    </svg>
  )
}

const TwitterIcon = ({iconColor, altColor, iconSize, path}) => {
  const [color, setColor] = useState(iconColor)

  return (
    <div 
      className = {footerStyles.twitterLogoContainer}
      style = {{backgroundColor:color, width:iconSize, height:iconSize }}
      onMouseOver = { () => setColor(altColor) }
      onFocus = { () => setColor(altColor) }
      onMouseLeave = { () => setColor(iconColor) }
      role = "link"
      tabIndex = "0"
    >
      <svg
        className = {footerStyles.twitterLogo}
        width = {iconSize - 7}
        height = {iconSize - 7}
        fill = 'white'
        viewBox = {`0 0 ${iconSize} ${iconSize}`}
      >
        <path d={path}/>
      </svg>
    </div>
  )
}

const Footer = ({...iconProps}) => {
  return (
    <footer className={footerStyles.container}>
      <div className={footerStyles.left}>
        Built with {` `} <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>

      <div className={footerStyles.center}>
        Kevin Hong, {new Date().getFullYear()}
      </div>

      <div className={footerStyles.right}>
        <ul className={footerStyles.iconList}>
          <ListLink to={siteData.sites.gitHub} >
            <Icon path={gitHubIcon.path} {...iconProps} />
          </ListLink>

          <ListLink to={siteData.sites.linkedIn} >
            <Icon path={linkedInIcon.path} {...iconProps}/>
          </ListLink>

          <ListLink to={siteData.sites.twitter} >
            <TwitterIcon path={twitterIcon.path} {...iconProps}/>
          </ListLink>

          <ListLink to={siteData.sites.medium} >
            <Icon path={mediumIcon.path} {...iconProps} />
          </ListLink>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
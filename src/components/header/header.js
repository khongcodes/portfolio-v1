import React, { useState } from "react";

import headerStyles from './header.module.scss';

const gitHubIcon = require('simple-icons/icons/github');
const linkedInIcon = require('simple-icons/icons/linkedin');
const twitterIcon = require('simple-icons/icons/twitter');
const mediumIcon = require('simple-icons/icons/medium');

const ListLink = props => (
  <li className={headerStyles.headerLink}>
    <a href={props.to} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  </li>
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
    >
      <path d={path} />
    </svg>
  )
}

const TwitterIcon = ({iconColor, altColor, iconSize, path}) => {
  const [color, setColor] = useState(iconColor)

  return (
    <div 
      className = {headerStyles.twitterLogoContainer}
      style = {{backgroundColor:color, width:iconSize, height:iconSize }}
      onMouseOver = { () => setColor(altColor) }
      onFocus = { () => setColor(altColor) }
      onMouseLeave = { () => setColor(iconColor) }
      role = "link"
    >
      <svg
        className = {headerStyles.twitterLogo}
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

const Header = ({ ...iconProps }) => {
  return (
  <header>
    <ul className={headerStyles.headerList}>
      <ListLink to='https://github.com/khongcodes' >
        <Icon path={gitHubIcon.path} {...iconProps} />
      </ListLink>

      <ListLink to='https://linkedin.com/in/khongcodes' >
        <Icon path={linkedInIcon.path} {...iconProps}/>
      </ListLink>

      <ListLink to='https://twitter.com/khongcodes' >
        <TwitterIcon path={twitterIcon.path} {...iconProps}/>
      </ListLink>

      <ListLink to='https://medium.com/@khongcodes' >
        <Icon path={mediumIcon.path} {...iconProps} />
      </ListLink>
    </ul>
  </header>
  )
}

export default Header

import React from "react";
import { Link } from "gatsby";
import { Github, Linkedin, Twitter, Medium } from "@icons-pack/react-simple-icons";

import headerStyles from './header.module.scss'

const handleMouseOver = () => {
  
}

const ListLink = props => (
  <li className={headerStyles.headerLink}>
    <a href={props.to}>
      {props.children}
    </a>
  </li>
)

const TwitterContainer = ({iconSize, iconColor}) => (
  <div className={headerStyles.twitterLogoContainer} style={{backgroundColor:iconColor, width:iconSize, height:iconSize }}>
    <Twitter color='white' size={iconSize-7} className={headerStyles.twitterLogo} />
  </div>
)

const Header = ({ siteTitle, iconSize, iconColor }) => (
  <header>
    <h1 className={headerStyles.headerTitle}>
      <Link to="/" >{siteTitle}</Link>
    </h1>

    <ul className={headerStyles.headerList}>
      <ListLink to='https://github.com/khongcodes' >
        <Github color={iconColor} size={iconSize} />
      </ListLink>

      <ListLink to='https://linkedin.com/in/khongcodes' >
        <Linkedin color={iconColor} size={iconSize} />
      </ListLink>

      <ListLink to='https://twitter.com/khongcodes' >
        <TwitterContainer iconSize={iconSize} iconColor={iconColor}/>
      </ListLink>

      <ListLink to='https://medium.com/@khongcodes' >
        <Medium color={iconColor} size={iconSize} />
      </ListLink>
    </ul>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

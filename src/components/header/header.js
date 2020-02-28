import { Link } from "gatsby";
import React from "react";

import headerStyles from 'header.module.scss'

const ListLink = props => (
  <li className={}>

  </li>
)

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link to="/" >{siteTitle}</Link>
      </h1>
    </div>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import React from "react";
import { Link } from "gatsby";

import headerStyles from './header.module.scss'

const ListLink = props => (
  <li className={headerStyles.headerLink}>
    <a href={props.to} >{props.children}</a>
  </li>
)

const Header = ({ siteTitle }) => (
  <header>
    <h1 className={headerStyles.headerTitle}>
      <Link to="/" >{siteTitle}</Link>
    </h1>

    <ul className={headerStyles.headerList}>
      <ListLink to='https://github.com/khongcodes' >
        Git
      </ListLink>

      <ListLink to='https://linkedin.com/in/khongcodes' >
        LinkedIn
      </ListLink>

      <ListLink to='https://twitter.com/khongcodes' >
        Twitter
      </ListLink>

      <ListLink to='https://medium.com/@khongcodes' >
        Medium
      </ListLink>
    </ul>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

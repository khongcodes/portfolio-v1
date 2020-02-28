/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";

import Header from "./header/header";
import "./global.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header
        siteTitle = 'Kevin Hong'
        iconColor = 'rgb(125, 125, 125)'
        altColor = 'rgb(100, 100, 100)'
        iconSize = {24}
      />
      
      <div>
        <main>{children}</main>

        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout

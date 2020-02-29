/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";

import Footer from "./Footer";
import "../styles/global.scss";

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>

      <Footer 
        iconColor = 'rgb(155, 155, 155)'
        altColor = 'black'
        iconSize = {24}
      />
    </>
  )
}

export default Layout

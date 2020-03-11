import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import ProjectsList from "../components/ProjectsList";

import indexStyles from "../styles/index.module.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <div className={indexStyles.introSection}>
      <h1>Kevin Hong</h1>
      <p>Full stack web developer & designer</p>
    </div>

    <div className={indexStyles.projectsSection}>
      <h2>Projects</h2>
      <ProjectsList />
    </div>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}/>
  </Layout>
)

export default IndexPage

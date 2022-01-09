import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import HomePage from './home'
import Seo from "../components/seo"
import ParticlesBg from '../components/particles';

function IndexPage(){
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          keywords
          siteUrl
          }
        buildTime
        }
    }
  `);
  const { site } = data;

  return (
    
    <main>
    <ParticlesBg />
      <Seo site={site} />
        <title>Home Page</title>
      <HomePage />
    </main>

  )
}

export default IndexPage

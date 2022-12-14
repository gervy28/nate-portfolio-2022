import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HomePageHero from "../components/home-page-hero"
import BlogPostSelector from "../components/blog-post-selector"
import SkillsSection from "../components/skills-section"
import VisualPortfolio from "../components/visual-portfolio"
import ContactInfo from "../components/contact-info"
import BackgroundImge from "../images/background-pattern.svg"

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>  
      <HomePageHero />
      <BlogPostSelector></BlogPostSelector>
      <SkillsSection></SkillsSection>
      <VisualPortfolio></VisualPortfolio>
      <ContactInfo></ContactInfo>
      <div className="bg-svg-top" style={{backgroundImage: `url(${BackgroundImge})`}}></div>
      <div className="bg-main-middle"></div>
      <div className="bg-svg-bottom-containter">
        <div className="bg-svg-bottom" style={{backgroundImage: `url(${BackgroundImge})`}}></div>
      </div>
    </Layout>
  )
}

export default Home

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

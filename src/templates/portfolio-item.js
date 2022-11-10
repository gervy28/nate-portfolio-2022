/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import { useStaticQuery, graphql } from "gatsby"
 import * as portfolioItemStyles from "./portfolio-item.module.css"
 
 const PortfolioItem = ( item ) => {
 
  const background_img = item.background_img
  // const itemTitle = item.title
  // const description = item.description
  // const skillsUsed = item.three_skills_used
  // const toolsUsed = item.tools_used  
 
   return (
    <section 
      className={visualPortfolioStyles.portfolio_section_container} 
      style={{ backgroundImage: background_img ? `url(${background_img})` : 'black' }}
      
    >
      <h2>Company Decription</h2>

    </section>
   )
 }
 
 export default PortfolioItem
/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import { useStaticQuery, graphql } from "gatsby"
 import * as skillsSectionStyles from "./skills-section.module.css"
 
 const SkillsSection = () => {
   const data = useStaticQuery(graphql`
     query ResumeQuery {
       site {
         siteMetadata {
           resume {
             technology_skills,
             knowledge_domains,
             tools,
             soft_skills
           }
         }
       }
     }
   `)
 
   const resume = data.site.siteMetadata?.resume
 
   return (
    <section className={skillsSectionStyles.skills_section_container}>
      <h2>I AM GENERALIST WITH HANDS ON EXPEREINCE ACROSS MULTIPLE DOMAINS</h2>
    </section>
   )
 }
 
 export default SkillsSection
 
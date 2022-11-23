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
     
   const resumeItems = (resume) => {
    let resumeItems = [];
    for (const key in resume ){
      resumeItems.push(key);
    }
    return resumeItems;
   }
 
   return (
    <section className={skillsSectionStyles.skills_section_container}>
      <h2 id="skills" className="all-caps">MODEL INCLUDES GENERALIST SKILLS FOR CROSS-FUNCTIONAL MANEUVERABILITY</h2>
      {resumeItems(resume).map((item, i) => {
        return (
          <div key={i} className="contained_section">
            <h3 className="title_stretched">{item.replaceAll("_", " ")}</h3>
              <ol className={skillsSectionStyles.skills_list}>
              {resume[item].map((entry, i) => {
                return (
                  <li key={i}>{entry}</li>
                )
              })}
            </ol>
          </div>
        )
      })}

    </section>
   )
 }
 
 export default SkillsSection
 
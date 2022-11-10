/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import { useStaticQuery, graphql } from "gatsby"
 import * as visualPortfolioStyles from "./visual-portfolio.module.css"
 
 const SkillsSection = () => {
  //  const data = useStaticQuery(graphql`
  //    query ResumeQuery {
  //      site {
  //        siteMetadata {
  //          resume {
  //            technology_skills,
  //            knowledge_domains,
  //            tools,
  //            soft_skills
  //          }
  //        }
  //      }
  //    }
  //  `)
 
  //  const resume = data.site.siteMetadata?.resume
     
  //  const resumeItems = (resume) => {
  //   let resumeItems = [];
  //   for (const key in resume ){
  //     resumeItems.push(key);
  //   }
  //   return resumeItems;
  //  }
 
   return (
    <section className={visualPortfolioStyles.portfolio_section_container}>
      <h2>MY FOUNDATIONS ARE IN 'INTRA' AND 'ENTRE' - PRENEURSHIP</h2>
      {resumeItems(resume).map(item => {
        
        
        return (
          <div>
            <h3 className="stretched_title">{item.replaceAll("_", " ")}</h3>
              <ol className={skillsSectionStyles.skills_list}>
              {resume[item].map(entry => {
                return (
                  <li>{entry}</li>
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
 
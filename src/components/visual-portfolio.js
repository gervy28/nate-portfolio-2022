/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import * as visualPortfolioStyles from "./visual-portfolio.module.css"
 import JSONData from "../../content/resume/structured-resume.json"
 import { GatsbyImage, getImage } from "gatsby-plugin-image"
 import { useStaticQuery, graphql } from "gatsby"

 
 const VisualPortfolio = () => {
  // const jobs = JSONData['work'];
  const data = useStaticQuery(graphql`
    query Resume {
      resumeJson {
        work {
          company
          description
          endDate
          startDate
          logo
          position
          name
          location
          summary
          url
          website
          reference {
            review
            reviewer
          }
          highlights {
            description
            image
            projectName
            skills
            tools
          }
        }
      }
    }
  `)
  
  const testImage = data.resumeJson.work[0].highlights[0].image
  const myImage = getImage(testImage);
  

   return (
    <section className={visualPortfolioStyles.portfolio_section_container}>
      <h2 className="title_large">A FOUNDATION IN 'INTRA' AND 'ENTRE' - PRENEURSHIP</h2>
        {data.resumeJson.work.map(entry => {
          return (
            <div>
              <h3 className="title_stretched">{entry["name"]}</h3>
              <div className={visualPortfolioStyles.portfolio_items_wrapper}>
                {entry['highlights'].map(highlight => {
                  return (
                    <div className={visualPortfolioStyles.portfolio_item}>
                      <h4>{highlight.projectName}</h4>
                      <p>{highlight.description}</p>
                      <ul>
                        {highlight['skills'].map(skill => {
                          return <li>{skill}</li>
                        })}
                      </ul>
                      <ul>
                        {highlight['tools'].map(tool => {
                          return <li>{tool}</li>
                        })}
                      </ul>
                    </div>
                  )
                })}

              </div> 
            </div>
          )
        })}
    </section>
   )
 }
 
 export default VisualPortfolio
 
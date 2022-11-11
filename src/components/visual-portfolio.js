/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import * as visualPortfolioStyles from "./visual-portfolio.module.css"
 import JSONData from "../../content/resume/structured-resume.json"
 
 const VisualPortfolio = () => {
  const jobs = JSONData['work'];

   return (
    <section className={visualPortfolioStyles.portfolio_section_container}>
      <h2 className="title_large">A FOUNDATION IN 'INTRA' AND 'ENTRE' - PRENEURSHIP</h2>
        {jobs.map(entry => {
          return (
            <div>
              <h3 className="title_stretched">{entry["name"]}</h3>
              <div className={visualPortfolioStyles.portfolio_items_wrapper}>
                {entry['highlights'].map(highlight => {
                  return (
                    <div>
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
 
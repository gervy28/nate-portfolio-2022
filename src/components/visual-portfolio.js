/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import * as visualPortfolioStyles from "./visual-portfolio.module.css"
 import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"
 import { useStaticQuery, graphql } from "gatsby"

 
 const VisualPortfolio = () => {
  // const jobs = JSONData['work'];
  const data = useStaticQuery(graphql`
  query Resume {
    resumeJson {
      work {
        company
        highlights {
          description
          projectName
          skills
          tools
          image {
            src {
              childImageSharp {
                gatsbyImageData(transformOptions: {fit: COVER})
              }
            }
          }
        }
      }
    }
  }
  
  `)
  
  const setBackgroundImage = (src) => {
    return (
      <GatsbyImage 
        image={getImage(src)} 
        className={visualPortfolioStyles.portfolio_item_background}
        objectFit="cover">
      </GatsbyImage>
    );
  }


  // const testImage = data.resumeJson.work[0].highlights[0]["projectName"]
  // const myImage = getSrc(testImage);
  


   return (
    <section className={visualPortfolioStyles.portfolio_section_container}>
      {/* <GatsbyImage image={myImage}></GatsbyImage> */}
      <h2 className="title_large">A FOUNDATION IN 'INTRA' AND 'ENTRE' - PRENEURSHIP</h2>
      {data.resumeJson.work.map(entry => {
        return (
          <div>
            <h3 className="title_stretched">{entry["company"]}</h3>
            {/* Start Card Wrapper */}
            <div className={visualPortfolioStyles.portfolio_items_wrapper}>
              {/* Render the individual card */}
              {entry['highlights'].map(highlight => {
                return (
                  <div className={visualPortfolioStyles.portfolio_item}>
                    
                    { highlight.image && setBackgroundImage(highlight.image.src) }
                    <div className={visualPortfolioStyles.portfolio_item_content_wrap}>
                      <div>
                        <h4>{highlight.projectName}</h4>
                        <p>{highlight.description}</p>
                      </div>
                      <div>
                        <h5>Skills</h5>
                        <div className={visualPortfolioStyles.tag_container}>
                          {highlight['skills'].map(skill => {
                            return <div>{skill}</div>
                          })}
                        </div>
                        <h5>Tools</h5>
                        <div  className={visualPortfolioStyles.tag_container}>
                          {highlight['tools'].map(tool => {
                            return <div>{tool}</div>
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}

            </div> 
          </div>
        )
      })}
      <div>
        <a className="btn_primary" href="#">Download My Resume</a>
      </div>
    </section>
   )
 }
 
 export default VisualPortfolio
 
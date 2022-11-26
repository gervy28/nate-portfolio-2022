/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import React, { useRef, createRef, useState } from "react"
 import * as visualPortfolioStyles from "./visual-portfolio.module.css"
 import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"
 import { useStaticQuery, graphql } from "gatsby"

 
 const VisualPortfolio = () => {
  // const jobs = JSONData['work'];
  const data = useStaticQuery(graphql`
  query Resume {
    resumeJson {
      work {
        name
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

  
  const setBackgroundImage = (src,i) => {
    if(!src) return; 

    return (
      <GatsbyImage 
        image={getImage(src)} 
        className={visualPortfolioStyles.portfolio_item_background}
        style={{
          position: 'absolute',
          width: '100%',
          top: 0,
          left: 0,
          zIndex: 1
        }}
        objectFit="cover"
        alt="nate g portfolio img"
        key={i}>
      </GatsbyImage>
    );
  }

  const [ isScrolling, activateScrolling ] = useState(false);
  const [ leftPosition, setLeftPosition ] = useState(0);
  const [ startXPos, setStartXPos] = useState(); 

  const scrollableSections = useRef([]);  

  scrollableSections.current = data.resumeJson.work.map((element, i) => 
    scrollableSections.current[i] ?? createRef()
  );

  
  function handleMouseDown(e, element) {
    // mouses starting coordinate
    activateScrolling(true);
    // get the x position of the cursor
    setStartXPos(e.pageX - element.current.offsetLeft);
    // get the current elements distance scrolled left
    setLeftPosition(element.current.scrollLeft);
  }

  function handleMouseLeave() {
    activateScrolling(false);
  }

  function handleMouseUp(e, element){
    activateScrolling(false);
  }

  function handleMouseMove(e, element){
    if(!isScrolling) return;
    e.preventDefault();
    const x = e.pageX - element.current.offsetLeft;
    const walk = (x - startXPos);
    element.current.scrollLeft = leftPosition - walk;
  }



   return (
    <section className={visualPortfolioStyles.portfolio_section_container}>
      <h2 id="portfolio" className="title_large">N8 IS TESTED ACROSS VARIOUS ROLES</h2>
      {data.resumeJson.work.map((entry, i) => {
        return (
          <div key={i}>
            <h3 className="title_stretched">{entry["company"]}</h3>
            {/* Start Card Wrapper -- where scrolling occurs*/}
            <div
              onMouseDown={(e) => handleMouseDown(e, scrollableSections.current[i])} 
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={(e) => handleMouseMove(e, scrollableSections.current[i])}
              ref={scrollableSections.current[i]} 
              className={visualPortfolioStyles.portfolio_items_wrapper}>

              {/* Render the individual card */}
              {entry['highlights'].map((highlight, i) => {
                return (
                  <div key={i} className={visualPortfolioStyles.portfolio_item}>
                    { highlight.image && setBackgroundImage(highlight.image.src, i) }
                    <div className={visualPortfolioStyles.portfolio_item_content_wrap}>
                      <div>
                        <h4>{highlight.projectName}</h4>
                        <p>{highlight.description}</p>
                      </div>
                      <div>
                        <h5>Skills</h5>
                        <div className={visualPortfolioStyles.tag_container}>
                          {highlight['skills'].map((skill,i) => {
                            return <div key={i}>{skill}</div>
                          })}
                        </div>
                        <h5>Tools</h5>
                        <div  className={visualPortfolioStyles.tag_container}>
                          {highlight['tools'].map((tool,i) => {
                            return <div key={i} >{tool}</div>
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
        <a className="btn_primary" target="_blank" href="/resume-2022-pm-112522.pdf">Download My Resume</a>
      </div>
    </section>
   )
 }
 
 export default VisualPortfolio
 
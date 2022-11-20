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


    console.log(startXPos);

    e.preventDefault();
    const x = e.pageX - element.current.offsetLeft;
    const walk = (x - startXPos);
    console.log(walk);
    element.current.scrollLeft = leftPosition - walk;
    // console.log(walk);
  }



   return (
    <section className={visualPortfolioStyles.portfolio_section_container}>
      {/* <GatsbyImage image={myImage}></GatsbyImage> */}
      <h2 className="title_large">A FOUNDATION IN 'INTRA' AND 'ENTRE' - PRENEURSHIP</h2>
      {data.resumeJson.work.map((entry, i) => {
        return (
          <div>
            <h3 className="title_stretched">{entry["company"]}</h3>

            {/* Start Card Wrapper -- where scrolling occurs*/}
            <div key={i} 
              onMouseDown={(e) => handleMouseDown(e, scrollableSections.current[i])} 
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={(e) => handleMouseMove(e, scrollableSections.current[i])}
              ref={scrollableSections.current[i]} 
              className={visualPortfolioStyles.portfolio_items_wrapper}>

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
 
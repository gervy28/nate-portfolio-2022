/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import { useStaticQuery, graphql } from "gatsby"
 import { StaticImage } from "gatsby-plugin-image"
 import * as homePageHeroStyles from "./home-page-hero.module.css"
 
 const HomePageHero = () => {
   const data = useStaticQuery(graphql`
     query BioQuery {
       site {
         siteMetadata {
           author {
             name
             summary
           }
           social {
             twitter
           }
         }
       }
     }
   `)
 
   // Set these values by editing "siteMetadata" in gatsby-config.js
   const author = data.site.siteMetadata?.author
   const social = data.site.siteMetadata?.social
 
   return (
    <section className={`contained_section ${homePageHeroStyles.hero_container}`} >
      <div>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <h1 className="title_stretched">make:gervenak  model:n8</h1>
          <h2>I'M BUILT TO CREATE TOOLS USERS WANT</h2>
          <p>
          My diverse background in entrepreneurship, intrapreneurship, design, 
          web development, and business development gives me a strong 
          understanding of what it takes to make new products. I'm focused 
          on rapidly creating user-centric products that drive business results. 
          </p>
        </div>
      </div>
      <div className={`mobile-hidden ${homePageHeroStyles.imgs_container}`}>
        <StaticImage 
          loading="eager" 
          src="../images/nate-working-for-portfolio.png"
          width={500}
          objectFit="cover"
          imgClassName={homePageHeroStyles.front_img}
          className={homePageHeroStyles.front_img_container}
          alt="nate gervenak working" 
        />
        <StaticImage
          loading="eager" 
          width={500}
          src="../images/nate-working-for-portfolio.png" 
          style={{
            position: 'absolute',
            top: '4.8rem',
            left: '-3.5rem',
            zIndex: 0,
            opacity: .2
          }}
          imgClassName={homePageHeroStyles.back_img}
          className={homePageHeroStyles.back_img_container}
          alt="nate gervenak working"
        />
      </div> 
    </section>

   )
 }
 
 export default HomePageHero
 
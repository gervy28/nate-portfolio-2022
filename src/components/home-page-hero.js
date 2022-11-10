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
    <section className={homePageHeroStyles.hero_container} >
      <div>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <h1 className="stretched_title">Nate Gervenak</h1>
          <h2>I'M BUILT TO DRIVE IDEAS FORWARD</h2>
          <p>
            My career objective is to drive efficiently built quality in a 
            diverse team of engineers, designers, marketers, sales people, and 
            executives to bridge the gap between raw-idea and functioning product. 
            I’ll do this by articulating requirements, making clear decisions, removing 
            barriers, and eliciting feedback. 
          </p>
        </div>
      </div>
      <div className={`mobile-hidden ${homePageHeroStyles.imgs_container}`}>
        <StaticImage 
          loading="eager" 
          src="../images/nate-working-for-portfolio.png"
          width={300}
          objectFit="cover"
          imgClassName={homePageHeroStyles.front_img}
          className={homePageHeroStyles.front_img_container}
          alt="nate gervenak working" 
        />
        <StaticImage
          loading="eager" 
          width={500}
          src="../images/nate-working-for-portfolio.png" 
          imgClassName={homePageHeroStyles.back_img}
          className={homePageHeroStyles.back_img_container}
          alt="nate gervenak working"
        />
      </div> 
    </section>

   )
 }
 
 export default HomePageHero
 
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
    <section>
      <div>
        <h1>Product Manager</h1>
        <h2>DESIGNED TO DRIVE IDEAS FORWARD</h2>
        <p>
          My career objective is to drive efficiently built quality in a 
          diverse team of engineers, designers, marketers, sales people, and 
          executives to bridge the gap between raw-idea and functioning product. 
          I’ll do this by articulating requirements, making clear decisions, removing 
          barriers, and eliciting feedback. 
        </p>
      </div>
      <div>
        <StaticImage 
          loading="eager" 
          src="../images/nate-working-for-portfolio.png"
          imgClassName={homePageHeroStyles.front_img}
          alt="nate gervenak working" 
        />
        <StaticImage
          loading="eager" 
          src="../images/nate-working-for-portfolio.png" 
          imgClassName={homePageHeroStyles.back_img} 
          alt="nate gervenak working"
        />
      </div> 
    </section>

   )
 }
 
 export default HomePageHero
 
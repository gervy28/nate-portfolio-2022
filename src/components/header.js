/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import { useStaticQuery, graphql } from "gatsby"
 import { StaticImage } from "gatsby-plugin-image"
 import * as headerStyles from "./header.module.css"
 
 const MainMenu = () => {
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
    <header className={headerStyles.global_header}>
      <h1>Nate Gervenak</h1>
      <nav>
        <ul>
          <li><a href="#skills">skills</a></li>
          <li><a href="#">portfolio</a></li>
          <li><a href="#">contact me</a></li>
        </ul>
      </nav>
    </header>
   )
 }
 
 export default MainMenu
 
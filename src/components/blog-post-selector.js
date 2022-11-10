/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import * as blogPostSelector from "./blog-post-selector.module.css"
 
 import * as React from "react"
 import { Link, graphql } from "gatsby"
 
 import Bio from "../components/bio"
 import Layout from "../components/layout"
 import Seo from "../components/seo"
 import HomePageHero from "../components/home-page-hero"
 
 const BlogIndex = ({ data, location }) => {
   const siteTitle = data.site.siteMetadata?.title || `Title`
   const posts = data.allMarkdownRemark.nodes
 
   if (posts.length === 0) {
     return (
      <section>
        <p>YOO nothing written yet</p>
      </section>
     )
   }
 
   return (
     <section>
       <ol style={{ listStyle: `none` }}>
         {posts.map(post => {
           const title = post.frontmatter.title || post.fields.slug
 
           return (
             <li key={post.fields.slug}>
               <article
                 className="post-list-item"
                 itemScope
                 itemType="http://schema.org/Article"
               >
                 <header>
                   <h2>
                     <Link to={post.fields.slug} itemProp="url">
                       <span itemProp="headline">{title}</span>
                     </Link>
                   </h2>
                   <small>{post.frontmatter.date}</small>
                 </header>
                 <section>
                   <p
                     dangerouslySetInnerHTML={{
                       __html: post.frontmatter.description || post.excerpt,
                     }}
                     itemProp="description"
                   />
                 </section>
               </article>
             </li>
           )
         })}
       </ol>
     </section>
   )
 }
 
 export default BlogIndex
 
 /**
  * Head export to define metadata for the page
  *
  * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
  */
 export const Head = () => <Seo title="All posts" />
 
 export const pageQuery = graphql`
   query {
     site {
       siteMetadata {
         title
       }
     }
     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
       nodes {
         excerpt
         fields {
           slug
         }
         frontmatter {
           date(formatString: "MMMM DD, YYYY")
           title
           description
         }
       }
     }
   }
 `
 
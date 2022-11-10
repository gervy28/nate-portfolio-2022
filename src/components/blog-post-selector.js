/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"


 import { Link, useStaticQuery, graphql } from "gatsby"
 import * as blogPostSelector from "./blog-post-selector.module.css"
 
 const BlogPostSelector = () => {

  const postsQuery = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
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
  `)

  const posts = postsQuery.allMarkdownRemark.nodes
 
   if (posts.length === 0) {
     return (
      <section>
        <p>More blog posts coming soon!</p>
      </section>
     )
   }
 
   return (
     <section className={blogPostSelector.section_blog}>
      <h2 className="stretched_title">my writing</h2>
      <div className={blogPostSelector.blog_cards_wrapper}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          return (
            //  https://blog.logrocket.com/build-image-carousel-from-scratch-vanilla-javascript/
            
            <div className={blogPostSelector.card} key={post.fields.slug}>
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
            </div>
          )
        })}
        </div>
     </section>
   )
 }
 
 export default BlogPostSelector
 
 
 
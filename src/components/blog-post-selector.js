/**
 * Blog Post Section: contains a GraphQl Static Query to 
 * grab all existing blog posts
 *
 * TODO: Turn into a carosel 
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
     <section className="contained_section">
      <div className={blogPostSelector.section_blog}>
        <h2 className="title_stretched">A Few Posts</h2>
        <div className={blogPostSelector.blog_cards_wrapper}>
          {posts.map((post, i) => {
            const title = post.frontmatter.title || post.fields.slug
            return (
              //  https://blog.logrocket.com/build-image-carousel-from-scratch-vanilla-javascript/
              <Link to={post.fields.slug} itemProp="url" className={blogPostSelector.card_link} key={i}>
                <div className={blogPostSelector.card} key={post.fields.slug}>
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      <h2>
                        
                          <span itemProp="headline">{title}</span>
                      
                      </h2>
                      <small>{post.frontmatter.date}</small>
                    </header>
                    <div>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </div>
                  </article>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
     </section>
   )
 }
 
 export default BlogPostSelector
 
 
 
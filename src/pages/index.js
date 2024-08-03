import * as React from "react"
import * as S from "../components/styled"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GlobalStyle from "../components/GlobalStyle"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  console.log(posts)

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <GlobalStyle />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <GlobalStyle />
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {/* {posts.map(post => {
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
        })} */}
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          console.log(post)
          return (
            <li key={post.fields.slug}>
              <S.StyledLink to={post.fields.slug} itemProp="url">
              <S.ArticleCard
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                { post.frontmatter.image && <img src={post.frontmatter.image} id="thumbnail" alt={title} style={{width: "100%", borderRadius: "10px"}}/>}
                  <header>
                  <div style={{display: "flex", gap: "15px"}}>
                  {
                    post.frontmatter.tags?.map(tag => {
                      return <p>{tag}</p>
                    })
                  }
                  </div>
                  <h2>
                      <span itemProp="headline">{title}</span>
                  </h2>
                </header>
              </S.ArticleCard>
              </S.StyledLink>
            </li>
          )
        })}
      </ol>
    </Layout>
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
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY/MM/DD")  
          title
          description
          image
          tags
        }
      }
    }
  }
`

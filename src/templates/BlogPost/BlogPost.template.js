import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
// import { rhythm, scale } from "../../utils/typography"
import { PostContainer, PostCard, BlogNav } from "./BlogPost.style"
import { Container, Row, Col } from "react-awesome-styled-grid"

class BlogPostTemplate extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const post = this.props.data.markdownRemark
    const {
      frontmatter: { image },
    } = post
    const { previous, next } = this.props.pageContext
    const fluid = image ? image.childImageSharp.fluid : null

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <PostContainer>
          <Container>
            <PostCard>
              <article>
                <header>
                  <div className="post__image">
                    <Img
                      imgStyle={{ objectFit: "contain" }}
                      className="img"
                      fluid={fluid}
                      src={fluid ? fluid.base64 : ""}
                    />
                  </div>
                </header>
                <div className="post__body">
                  <h1>{post.frontmatter.title}</h1>
                  <section dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
              </article>
            </PostCard>

            {(next || previous) && (
              <>
                <h1 style={{ margin: "2rem 0" }}>Veja também...</h1>
                <BlogNav>
                  {previous && (
                    <Link to={previous.frontmatter.slug}>
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                  {next && (
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </BlogNav>
              </>
            )}
          </Container>
        </PostContainer>

        {/* <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
              {post.frontmatter.date}
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <footer>
            <Bio />
          </footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav> */}
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        description
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

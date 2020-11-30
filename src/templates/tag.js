import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "@components/layout"
import { PostCard } from "@components/PostCard"
import { Container } from "react-awesome-styled-grid"
import { Row } from "react-flexa"

const Tags = props => {
  const { pageContext, data } = props
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <Container style={{ padding: "4rem 0" }}>
        <Row >
          {edges.map(({ node }) => {
            const { slug } = node.fields
            const { excerpt } = node
            const { title, image, date } = node.frontmatter
            const featuredImgFluid = image ? image.childImageSharp.fixed : null;

            return (
              <PostCard
                title={title}
                date={date}
                excerpt={excerpt}
                key={slug}
                fixed={featuredImgFluid}
                slug={slug}
              />
            )
          })}
        </Row>
      </Container>

    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date
            image {
              childImageSharp {
                fixed(width: 420, height: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`

import React from "react"
// import { Link } from "gatsby"
import { Header as HeaderLogo, Menu, Footer } from "../components"
// import { Container, Row, Col } from "react-awesome-styled-grid"
// import { rhythm, scale } from "../utils/typography"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import Flex from "react-styled-flexbox"
import { Colors } from "../config"

const MobileMarginCompensation = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 90px;
  }
`

const GlobalStyle = createGlobalStyle`
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css');
  h1 {
    font-size: 2.6rem;
  }

  body {
    overflow-x: hidden;
  }

  img {
    margin: 0;
  }
  
  p {
    margin-bottom: 0;
  }
`

class Layout extends React.Component {
  render() {
    const { children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`

    return (
      <ThemeProvider theme={Colors}>
        <Flex directionColumn>
          <GlobalStyle />
          <HeaderLogo />
          <Menu />
          <MobileMarginCompensation>{children}</MobileMarginCompensation>
          <Footer />
        </Flex>
      </ThemeProvider>
    )

    // if (location.pathname === rootPath) {
    //   header = (
    //     <h1
    //       style={{
    //         ...scale(1.5),
    //         marginBottom: rhythm(1.5),
    //         marginTop: 0,
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: `none`,
    //           textDecoration: `none`,
    //           color: `inherit`,
    //         }}
    //         to={`/`}
    //       >
    //         {title}
    //       </Link>
    //     </h1>
    //   )
    // } else {
    //   header = (
    //     <h3
    //       style={{
    //         fontFamily: `Montserrat, sans-serif`,
    //         marginTop: 0,
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: `none`,
    //           textDecoration: `none`,
    //           color: `inherit`,
    //         }}
    //         to={`/`}
    //       >
    //         {title}
    //       </Link>
    //     </h3>
    //   )
    // }
    // return (
    //   <Container>
    //     <Row>
    //       <Col xs={12} md={2} lg={4}>
    //         Col A
    //       </Col>
    //       <Col xs={12} md={10} lg={4}>
    //         Col B
    //       </Col>
    //     </Row>
    //     {children}
    //   </Container>
      // <div
      //   style={{
      //     marginLeft: `auto`,
      //     marginRight: `auto`,
      //     maxWidth: rhythm(24),
      //     padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      //   }}
      // >
      //   <header>{header}</header>
      //   <main>{children}</main>
      //   <footer>
      //     © {new Date().getFullYear()}, Built with
      //     {` `}
      //     <a href="https://www.gatsbyjs.org">Gatsby</a>
      //   </footer>
      // </div>
    // )
  }
}

export default Layout

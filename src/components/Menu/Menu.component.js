import React from "react"
import { Container, Row, Col, Hidden } from "react-awesome-styled-grid"
import { DesktopMenuBackground, StyledLink as Link } from "./Menu.style"
import { WhatsappButton } from "./WhatsappButton.component"
import { Menu as MobileMenu, HamburguerButton } from "./MobileMenu.component"

export const Menu = () => {
  const [open, toggleMenu] = React.useState(false)
  return (
    <>
      {/* mobile */}
      <Hidden lg xl>
        <MobileMenu {...{ open, toggleMenu }} />
        <HamburguerButton {...{ open, toggleMenu }} />
      </Hidden>
      {/* desktop */}
      <Hidden xs sm md>
        <DesktopMenuBackground>
          <Container>
            <Row>
              <Col lg={9}>
                <Link to="/">Home</Link>
                <Link to="/#sobre">Sobre</Link>
                <Link to="/tags/exames">Exames</Link>
                <Link to="/tags/noticias">Notícias</Link>
                <Link to="/tags/tratamentos">Tratamentos</Link>
                <Link to="/#convenios">Convênios</Link>
                <Link to="/#contato">Contato</Link>
              </Col>
              <Col lg={3}>
                <WhatsappButton />
              </Col>
            </Row>
          </Container>
        </DesktopMenuBackground>
      </Hidden>
    </>
  )
}

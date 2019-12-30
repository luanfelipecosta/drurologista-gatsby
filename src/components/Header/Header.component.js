import React from "react"
import { Logo, LogoWrapper, HeaderWrapper, Wrapper } from "./Header.style"
import { Container, Hidden } from "react-awesome-styled-grid"
import { ContactCell } from "./ContactCell.component"
import { Link } from "gatsby"

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <HeaderWrapper>
          <LogoWrapper>
            <Link to="/">
              <Logo />
            </Link>
          </LogoWrapper>
          <Hidden xs sm md>
            <ContactCell
              title="Ligue para nós"
              description={`(12) 3923-4146 \n  (12) 3923-4166`}
              icon="phone"
              onClick={() => window.open("tel:+551239234146")}
            />
            <ContactCell
              key="endereco"
              title="Endereço"
              description={`R. Marcondes Salgado, 74 \n São José dos Campos`}
              icon="map-marker-alt"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/dir/?api=1&destination=-23.19585,-45.895538&travelmode=driving",
                  "_blank"
                )
              }
            />
            <ContactCell
              title="Facebook"
              description={`Dr. Urologista \n  Dr. Leonardo Braga`}
              icon="facebook"
              onClick={() =>
                window.open("https://www.facebook.com/drurologista/", "_blank")
              }
            />
          </Hidden>
        </HeaderWrapper>
      </Container>
    </Wrapper>
  )
}

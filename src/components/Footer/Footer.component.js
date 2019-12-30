import React from "react"
import { Container, Row, Col, Flex } from "../../components"
import {
  StyledFooter,
  RightsStripe,
  ContactCell,
  FooterCol,
} from "./Footer.style"
import LIGHT_LOGO from "../../assets/logo-light.png"

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <Container>
          <Row>
            <FooterCol>
              <img src={LIGHT_LOGO} />
            </FooterCol>
            <FooterCol>
              <Flex directionColumn>
                <h2>Menu</h2>
                <a href="#">Home</a>
                <a href="#">Home</a>
                <a href="#">Home</a>
              </Flex>
            </FooterCol>
            <FooterCol>
              <Flex directionColumn>
                <h2>Contato</h2>
                <ContactCell
                  title="Ligue para nós"
                  description={`+55 (12) 3923-4146 \n  +55 (12) 3923-4166`}
                  icon="phone"
                />
                <div style={{ margin: "1rem 0" }}>
                  <ContactCell
                    key="endereco"
                    title="Endereço"
                    description={`R. Marcondes Salgado, 74 \n São José dos Campos`}
                    icon="map-marker-alt"
                  />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <ContactCell
                    key="endereco"
                    title="Horário de funcionamento"
                    description={`Seg. - Sex: 09:00 - 18:00 \n Sab: 09:00 - 13:00`}
                    icon="clock"
                  />
                </div>
                <ContactCell
                  title="E-mail"
                  description={`PLACE_MAIL_HERE`}
                  icon="envelope"
                />
              </Flex>
            </FooterCol>
            <FooterCol>
              <Flex directionColumn>
                <h2>Redes Sociais</h2>
                <a href="#">Facebook</a>
              </Flex>
            </FooterCol>
          </Row>
        </Container>
      </StyledFooter>
      <RightsStripe></RightsStripe>
    </>
  )
}

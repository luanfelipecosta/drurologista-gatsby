import React from "react"
import { Background } from "../CategoriesSection/CategoriesComponent.style"
import { Container } from "react-awesome-styled-grid"
import { Row, Col, SectionTitle } from "@components"
import Flex from "react-styled-flexbox"
import c1 from "../../assets/convenio-1.png"
import c2 from "../../assets/convenio-2.png"
import c3 from "../../assets/convenio-3.png"
import c4 from "../../assets/convenio-4.png"

const EnsuranceLogo = ({ source }) => (
  <Col xs={6} sm={6} md={3} lg={3}>
    <Flex itemsCenter justifyCenter>
      <img src={source} />
    </Flex>
  </Col>
)

export default function EnsuranceSection(props) {
  return (
    <>
      <Background id="convenios" style={{ paddingRight: "1rem" }}>
        <Container>
          <Row justifyContent="center">
            <SectionTitle caption="Cobertura" title="Convênios que atendemos" />
          </Row>
          <Row alignItems="center">
            <EnsuranceLogo source={c1} />
            <EnsuranceLogo source={c2} />
            <EnsuranceLogo source={c3} />
            <EnsuranceLogo source={c4} />
          </Row>
        </Container>
      </Background>
    </>
  )
}

import React from "react"
import { Container, Hidden } from "react-awesome-styled-grid"
import { Row, Col } from "react-flexa"
import { SectionTitle } from "@components"
import TreatmentTile from "./TreatmentTile.component"

export default function TreatmentsSection(props) {
  return (
    <>
      <Container style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}>
        <Row>
          <Col lg={3} xs={12} md={12} style={{ paddingRight: "1rem" }}>
            <Hidden xs>
              <SectionTitle
                centered={false}
                caption="Tratamentos"
                title="Pricipais tratamentos"
              />
            </Hidden>
            <Hidden lg xl md sm>
              <SectionTitle caption="Categorias" title="Áreas das urologia" />
            </Hidden>
          </Col>
          <Col lg={9} xs={12} sm={12} md={12}>
            <Row>
              {["Prostata", "Impotência", "Bexiga", "Rim"].map(item => {
                return (
                  <TreatmentTile key={String(Math.random())} treatment={item} />
                )
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

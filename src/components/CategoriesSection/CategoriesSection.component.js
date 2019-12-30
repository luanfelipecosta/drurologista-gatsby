import React from "react"
import { Background } from "./CategoriesComponent.style"
import { Container, Hidden } from "react-awesome-styled-grid"
import { Row, Col } from "react-flexa"
import { SectionTitle } from "@components"
import CategoryTile from "./CategoryTile.component"

export default function CategoriesSection(props) {
  const tagsWithoutAllTag = ["Idosos", "Homens", "Artigos", "Mulheres"]
  return (
    <>
      <Background>
        <Container>
          <Row>
            <Col lg={3} xs={12} md={12} style={{ paddingRight: "1rem" }}>
              <Hidden xs>
                <SectionTitle
                  centered={false}
                  caption="Categorias"
                  title="Áreas da urologia"
                />
              </Hidden>
              <Hidden lg xl md sm>
                <SectionTitle caption="Categorias" title="Áreas das urologia" />
              </Hidden>
            </Col>
            <Col lg={9} xs={12} sm={12} md={12}>
              <Row>
                {tagsWithoutAllTag.map(category => {
                  return (
                    <CategoryTile category={category} key={String(Math.random())} />
                  )
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </Background>
    </>
  )
}

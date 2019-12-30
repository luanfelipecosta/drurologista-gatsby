import React from "react"
import {
  TileLabel,
  TileWrapper,
  BlueOverlay,
} from "./CategoriesComponent.style"
import { Col } from "react-flexa"
import { Link } from "gatsby"

export default function CategoryTile({ category = "Homens" }) {
  return (
    <Col md={3} sm={6} xs={6} style={{ marginBottom: "1rem" }}>
      <Link
        style={{ textDecoration: "none" }}
        to={`/tags/${String(category)
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()}`}
      >
        <TileWrapper category={category}>
          <TileLabel>{category}</TileLabel>
          <BlueOverlay />
        </TileWrapper>
      </Link>
    </Col>
  )
}

import React from "react"
import imgRim from "../../assets/rim.png"
import imgDisfuncao from "../../assets/disfuncao.png"
import { Link } from "gatsby"
import imgBexiga from "../../assets/exame_disfuncao.png"
import imgProstata from "../../assets/exame_prostata.png"
import { TreatmentTile } from "./TreatmentsSection.style"
import { Col } from "@components"

const imgObj = {
  Impotência: imgDisfuncao,
  Prostata: imgProstata,
  Bexiga: imgBexiga,
  Rim: imgRim,
}

export default function TreatmentsTileComponent({ treatment = "Rim" }) {
  return (
    <Col style={{ marginBottom: "2rem" }} xs={6} sm={6} md={3} lg={3} xl={3}>
      <Link
        style={{ textDecoration: "none" }}
        to={`/tags/${String(treatment)
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()}`}
      >
        <TreatmentTile>
          <img alt='threatment icon' src={imgObj[treatment]} />
          <span>{treatment}</span>
        </TreatmentTile>
      </Link>
    </Col>
  )
}

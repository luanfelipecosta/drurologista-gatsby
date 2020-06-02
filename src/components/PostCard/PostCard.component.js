import React from "react"
import { StyledPostCard, ThubnailContainer, Col } from "./PostCard.style"
import { Colors } from "@config/Colors"
import moment from "moment"
import { Link } from "gatsby"
import { Button } from "@components"
import Img from "gatsby-image"

export default function PostCard(props) {
  const { fixed, title, date, excerpt, slug } = props

  console.log({ title, fixed })

  return (
    <Col>
      <StyledPostCard>
        <ThubnailContainer>
          <Img
            imgStyle={{ objectFit: "contain" }}
            className="img"
            {...{
              fixed,
            }}
          />
        </ThubnailContainer>

        <div className="Poscard__Body">
          <Link
            style={{ textDecoration: "none", color: Colors.DarkBlue }}
            to={slug}
          >
            <h3>{title}</h3>
          </Link>

          <strong>{moment(date).format("DD/MM/YYYY")}</strong>

          <p>{excerpt}</p>

          <Button linkTo={slug}>SAIBA MAIS</Button>
        </div>
      </StyledPostCard>
    </Col>
  )
}

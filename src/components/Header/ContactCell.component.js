import React from "react"
import { Col } from "react-awesome-styled-grid"
import { Link } from "gatsby"
import Flex from "react-styled-flexbox"
import {
  ContactCellIcon as Icon,
  ContactCellTitle as Title,
  ContactCellDescription as Description,
} from "./Header.style"
import FB_SVG from "../../assets/facebook-svg.svg"

export const ContactCell = props => {
  const {
    icon,
    title = "–",
    description = "–",
    light = false,
    style = {},
    onClick = null,
    to = '/',
  } = props

  return (
    <Col style={style}>
      <Link to={to} onClick={onClick} style={{ textDecoration: "none" }}>
        <Flex>
          {icon === "facebook" && (
            <img alt="facebook svg" src={FB_SVG} style={{ marginRight: 16 }} />
          )}
          {icon && icon !== "facebook" && (
            <Icon light={light} className={`fa fa-${icon}`} />
          )}
          <Flex directionColumn>
            {true && <Title light={light}>{title}</Title>}
            {description.split("\n").map(item => (
              <Description light={light} key={String(Math.random())}>
                {item}
              </Description>
            ))}
          </Flex>
        </Flex>
      </Link>
    </Col>
  )
}

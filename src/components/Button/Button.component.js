import React from "react"
import { Link } from "gatsby"
import { ButtonBody, ButtonLabel } from "./Button.style"

export default function Button({
  children,
  onClick,
  linkTo,
  margin,
  backgroundColor,
  expanded,
}) {
  return (
    <Link style={{ textDecoration: "none" }} to={linkTo} onClick={onClick}>
      <ButtonBody
        margin={margin}
        expanded={expanded}
        backgroundColor={backgroundColor}
      >
        <ButtonLabel>{children}</ButtonLabel>
      </ButtonBody>
    </Link>
  )
}

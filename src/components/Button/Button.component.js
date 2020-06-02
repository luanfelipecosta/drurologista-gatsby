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
  const renderButton = () => (
    <ButtonBody
      margin={margin}
      expanded={expanded}
      backgroundColor={backgroundColor}
    >
      <ButtonLabel>{children}</ButtonLabel>
    </ButtonBody>
  )

  if (linkTo) {
    return (
      <Link style={{ textDecoration: "none" }} to={linkTo} onClick={onClick}>
        {renderButton()}
      </Link>
    )
  }
  return renderButton()
}

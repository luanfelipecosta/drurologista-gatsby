import React from "react"
import {
  ButtonWrapper,
  WhatsappIcon,
  ButtonTitle,
  ButtonDescription,
} from "./Menu.style"
import Flex from "react-styled-flexbox"

export const WhatsappButton = () => {
  return (
    <ButtonWrapper onClick={() => window.open("https://wa.me/5512996390908", "_blank")}>
      <WhatsappIcon className="fa fa-brands-whatsapp" />
      <Flex directionColumn>
        <ButtonTitle>Agende sua consulta</ButtonTitle>
        <ButtonDescription>+55 (12) 99639-0908</ButtonDescription>
      </Flex>
    </ButtonWrapper>
  )
}

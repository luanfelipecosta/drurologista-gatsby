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
    <ButtonWrapper href="tel:+551239234146">
      <WhatsappIcon className="fa fa-brands-whatsapp" />
      <Flex directionColumn>
        <ButtonTitle>Agende sua consulta</ButtonTitle>
        <ButtonDescription>+55 (12) 3923-4146</ButtonDescription>
      </Flex>
    </ButtonWrapper>
  )
}

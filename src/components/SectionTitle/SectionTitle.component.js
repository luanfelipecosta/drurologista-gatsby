import React from "react"
import { BlueTile, Caption, Title } from "./SectionTitle.style"
import Flex from "react-styled-flexbox"

export default function SectionTitle({
  centered = true,
  caption = "–",
  title = "–",
}) {
  return (
    <>
      <Flex directionColumn itemsCenter={centered}>
        <Caption>{caption}</Caption>
        <Title itemsCenter={centered}>{title}</Title>
        <BlueTile />
      </Flex>
    </>
  )
}

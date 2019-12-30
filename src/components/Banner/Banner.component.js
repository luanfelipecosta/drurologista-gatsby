import React from "react"
import {
  ImageContainer,
  BannerContent,
  BannerDescription,
  StyledRow,
} from "./Banner.style"
import { Button } from "@components"
import { Container } from "react-awesome-styled-grid"
import { Colors } from "../../config"

export default function Banner() {
  return (
    <ImageContainer>
      <Container>
        <StyledRow justify="center">
          <BannerContent>
            <h1>Colicas renais, infecção urinária?</h1>
            <BannerDescription>
              Entendemos sua urgência, agende agora uma consulta de emergência.
            </BannerDescription>

            <Button
              margin="2rem 0 1rem 0"
              expanded
              backgroundColor={Colors.Green}
              onClick={() =>
                window.open(
                  "https://wa.me/5512996390908?text=Ola,%20gostaria%20de%20agendar%20uma%20consulta",
                  "_blank"
                )
              }
            >
              AGENDAR UMA CONSULTA POR WHATSAPP
            </Button>
          </BannerContent>
        </StyledRow>
      </Container>
    </ImageContainer>
  )
}

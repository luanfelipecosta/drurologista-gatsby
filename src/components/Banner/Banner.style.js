import styled from "styled-components"
import BG from "../../assets/banner.png"
import Flex from "react-styled-flexbox"
import { Button } from "@components"

export const ImageContainer = styled.div`
  width: 100%;
  background-image: url(${BG});
  left: 0;
  top: 0;
  background-repeat: no-repeat;
  background-size: cover;
`

export const BannerContent = styled(Flex)`
  max-width: 450px;
  flex-direction: column;
  padding: 2.5rem 0;
`

export const BannerDescription = styled.p`
  color: ${({ theme }) => theme.Gray};
`

export const StyledRow = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 64rem) {
    justify-content: center;
    padding-left: 0;
  }

  
`;
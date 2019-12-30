import styled from "styled-components"
import { Container as RawContainer } from "react-awesome-styled-grid"
import LOGO from "../../assets/logo.png"
import { Row, Col } from "react-awesome-styled-grid"
import { rhythm } from "../../utils/typography"

export const Wrapper = styled.div`
  background: #fff;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    position: fixed;
    z-index: 20;
  }
`

export const Logo = styled.img.attrs({
  src: LOGO,
})`
  width: 280px;
  margin: 0;
`

export const LogoWrapper = styled(Col).attrs({
  lg: 3,
  align: "center",
})`
  justify-content: center;
  align-items: center;
`

export const HeaderWrapper = styled(Row)`
  padding: 1rem 0;
`

export const ContactCellIcon = styled.i`
  color: ${({ theme, light }) => (light ? "#fff" : theme.Blue)};
  font-size: ${({ light }) => (light ? rhythm(1) : rhythm(1.3))};
  margin-right: 1rem;
  margin-top: 0.5rem;
`

export const ContactCellTitle = styled.p`
  margin-bottom: 0.2rem;
  font-weight: 700;
  color: ${({ theme, light }) => (light ? "#fff" : theme.Black)};
`

export const ContactCellDescription = styled.p`
  margin: 0;
  color: ${({ theme, light }) => (light ? "#fff" : theme.Gray)};
  opacity: ${({ light }) => (light ? 0.7 : 1)};
`

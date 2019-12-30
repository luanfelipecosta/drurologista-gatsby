import styled from "styled-components"
import { Col } from "react-awesome-styled-grid"
import { ContactCell as BaseContactCell } from "../Header/ContactCell.component"

export const ContactCell = styled(BaseContactCell).attrs({
  light: true,
  style: { margin: "1rem 0" },
})`
  margin: 1rem 0;
`

export const FooterCol = styled(Col).attrs({
  xs: 12,
  sm: 6,
  md: 4,
  lg: 3,
  xl: 3,
})`
  margin-bottom: 2rem;
`

export const StyledFooter = styled.div`
  background: ${({ theme }) => theme.DarkBlue};
  padding: 4rem 0;
  color: #fff;

  a {
    opacity: 0.6;
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.75rem;
  }

  i {
    color: #fff;
  }

  img {
    /* width: 200px; */
    height: 46px;
  }
`

export const RightsStripe = styled.div`
  background: ${({ theme }) => theme.DarkerBlue};
`

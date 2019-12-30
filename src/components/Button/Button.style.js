import styled from "styled-components"
import { scale, rhythm } from "../../utils/typography"

export const ButtonBody = styled.div`
  cursor: pointer;
  padding: 1rem 2rem;
  border-radius: 2rem;
  display: flex;
  width: ${({ expanded }) => (expanded ? "auto" : "fit-content")};
  margin: ${({ margin = "0" }) => margin};
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor || theme.DarkBlue};
`

export const ButtonLabel = styled.span`
  font-size: ${rhythm(0.6)};
  font-weight: 500;
  color: white;
`

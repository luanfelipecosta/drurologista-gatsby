import styled from "styled-components"
import { rhythm } from "../../utils/typography"

export const TreatmentTile = styled.div`
  background-color: ${({ theme }) => theme.BackgroundGray};
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  justify-content: center;
  cursor: pointer;
  
  img {
    width: 100%;
    height: 215px;
    filter: grayscale(100%);
    transition: all ease-in-out 200ms;
  }

  &:hover img {
    filter: grayscale(0%);
  }

  span {
    font-weight: 700;
    font-size: ${rhythm(.8)};
    margin: 1rem 0;
    color: ${({ theme }) => theme.DarkBlue};
    transition: all ease 300;
    text-align: center;
  }

  &:hover span {
    color: ${({ theme }) => theme.Blue};
  }
`

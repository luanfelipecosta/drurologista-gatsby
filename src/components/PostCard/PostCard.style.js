import styled from "styled-components"
import { Col as Cow } from "react-flexa"

export const Col = styled(Cow).attrs({
  style: {
    marginBottom: "2rem",
    padding: "0 2rem",
  },
  xs: 12,
  sm: 12,
  md: 12,
  lg: 4,
  xl: 4,
})``

export const StyledPostCard = styled.article`
  background: ${({ theme }) => theme.BackgroundGray};
  box-shadow: 0px 10px 24px 5px rgba(0, 0, 0, 0.05);

  .img {
    width: 100%;
    max-height: 100%;
    object-fit: contain;
    filter: grayscale(100%);
    transition: all ease-in-out 200ms;
    object-fit: contain;
  }

  a,
  a:visited {
    color: ${({ theme }) => theme.BlueDark};
  }

  &:hover .img {
    filter: grayscale(0%);
  }

  h3 {
    color: ${({ theme }) => theme.BlueDark};
  }

  &:hover h3 {
    color: ${({ theme }) => theme.Blue};
  }

  p {
    color: ${({ theme }) => theme.Gray};
    margin: 1rem;
  }

  .Poscard__Body {
    padding: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`

export const ThubnailContainer = styled.div`
  width: 100%;
  height: 300px;
  background: white;
`

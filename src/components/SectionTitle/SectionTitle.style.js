import styled from "styled-components"

export const Title = styled.h1`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.Black};
  text-align: ${({ centered }) => (centered ? "center" : "left")};
`

export const Caption = styled.span`
  font-size: 1.7rem;
  margin-bottom: 0.5rem;
  font-weight: 200;
  color: ${({ theme }) => theme.Black};
`

export const BlueTile = styled.div`
  content: "";
  width: 102px;
  height: 6px;
  display: block;
  background: ${({ theme }) => theme.Blue};
  margin-bottom: 2rem;
`

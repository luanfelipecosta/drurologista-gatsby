import styled from "styled-components"
import { Colors } from "../../config/Colors"
import { scale } from "../../utils/typography"
import WHATSAPPSVG from "../../assets/whatsapp.svg"
import WHATSAPPLIGHT from "../../assets/whatsapp-light.svg"
import { Sizes } from "../../config"
import { Link } from "gatsby"

export const DesktopMenuBackground = styled.div`
  display: flex;
  flex: 1;
  background-color: ${Colors.Blue};
  flex-direction: row;
`

export const StyledLink = styled(Link).attrs({
  style: {
    ...scale(0.2),
    fontWeight: "500",
    textDecoration: "none",
    color: "white",
    marginLeft: "3rem",
    padding: "2rem 0",
  },
})``

export const Item = styled.span({})

export const ButtonWrapper = styled.div`
  background-color: ${Colors.DarkBlue};
  display: flex;
  flex: 1;
  align-items: center;
  /* justify-content: center; */
  padding: 1rem 2rem;
  cursor: pointer;
  min-width: 280px;
`

export const WhatsappIcon = styled.img.attrs({
  src: WHATSAPPSVG,
})`
  width: 2.2rem;
  margin-right: 1rem;
  margin-bottom: 0;
`

export const ButtonTitle = styled.p`
  ${Sizes.Font.heading};
  color: #fff;
  font-weight: 500;
  margin-bottom: 0.2rem;
`

export const ButtonDescription = styled.p`
  color: #fff;
`

// mobile menu
export const StyledHamburguer = styled.button`
  position: fixed;
  top: 2.5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 30;
  padding: 0;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.Blue};
    border-radius: 4px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`

export const Backdrop = styled.div`
  background: #000;
  opacity: 0.8;
  width: 100vw;
  height: 100vh;
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  z-index: 11;
  position: fixed;
  transition: transform 0.3s ease-in-out;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    display: block;
  }
`

export const CloseButton = styled.i.attrs({ className: "fa fa-times" })`
  color: #fff;
  font-size: 2.5rem;
  position: absolute;
  right: 5%;
  top: 5%;
  cursor: pointer;
`
// mobile menu itself
export const StyledMenu = styled.nav`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.Blue};
  height: 100vh;
  text-align: center;
  padding: 4rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  transition: transform 0.3s ease-in-out;
  max-width: 80vw;
  width: 100%;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    padding: 1rem 0;
    font-weight: 500;
    letter-spacing: 0.1rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.backgroundGray};
    }
  }
`

export const MobileMenuSocialMedias = styled.div`
  padding: 2.5rem 0;
  border-bottom: 1px solid #fff;
  margin-bottom: 2.5rem;

  h2 {
    text-align: center;
    opacity: 0.8;
    color: #fff;
    font-weight: 300;
    letter-spacing: 0.3rem;
    margin-top: 2rem;
  }
`

export const FooterWhatsapp = styled.img.attrs({
  src: WHATSAPPLIGHT,
})`
  width: 4rem;
  margin-bottom: 0;
`

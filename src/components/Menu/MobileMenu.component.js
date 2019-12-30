import React from "react"
import {
  StyledMenu,
  StyledHamburguer,
  Backdrop,
  CloseButton,
  MobileMenuSocialMedias,
  FooterWhatsapp,
} from "./Menu.style"
import { Link as RawLink } from "gatsby"

export const Menu = ({ open, toggleMenu }) => {
  const closeMenu = () => {
    document.querySelector("html").style.overflow = open ? "scroll" : "hidden"
    toggleMenu(false)
  }

  const Link = props => <RawLink {...props} onClick={closeMenu} />

  return (
    <>
      <StyledMenu open={open}>
        <CloseButton onClick={closeMenu} />
        <Link to="/">Home</Link>
        <Link to="/#sobre">Sobre</Link>
        <Link to="/tags/exames">Exames</Link>
        <Link to="/tags/noticias">Notícias</Link>
        <Link to="/tags/tratamentos">Tratamentos</Link>
        <Link to="/#convenios">Convênios</Link>
        <Link to="/#contato">Contato</Link>
        <MobileMenuSocialMedias>
          <FooterWhatsapp />
          <h2>+55 (12) 99639-0908</h2>
        </MobileMenuSocialMedias>
      </StyledMenu>
      <Backdrop open={open} />
    </>
  )
}

export const HamburguerButton = ({ open, toggleMenu }) => {
  const _toggleMenu = () => {
    document.querySelector("html").style.overflow = open ? "scroll" : "hidden"
    toggleMenu(!open)
  }

  return (
    <StyledHamburguer onClick={_toggleMenu}>
      <div />
      <div />
      <div />
    </StyledHamburguer>
  )
}

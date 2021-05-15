import React, { useState } from "react";
import {
  Container,
  NavBar,
  Logo,
  Burger,
  StyledMenu,
  MenuDescktop,
  SocialNetwork,
  ContainerSocial,
} from "./Menu.styles";
import logo from "../../images/logo-menu.png";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import youtube from "../../images/youtube.svg";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const ShowMenu = () => {
    setOpen(!open);
    console.log("click");
  };

  return (
    <Container>
      <NavBar>
        {open && (
          <StyledMenu open={open}>
            <Logo open={open} src={logo} alt="logo" />
            <a href="/">Nuestros productos</a>
            <a href="/">Disfruta cuidarte</a>
            <a href="/">Blog</a>
            <ContainerSocial>
              <SocialNetwork src={facebook} alt="facebook" />
              <SocialNetwork src={instagram} alt="instagram" />
              <SocialNetwork src={youtube} alt="youtube" />
            </ContainerSocial>
          </StyledMenu>
        )}
        <Logo src={logo} alt="logo" />
        <MenuDescktop>
          <a href="/">Nuestros productos</a>
          <a href="/">Disfruta cuidarte</a>
          <a href="/">Blog</a>
          <ContainerSocial>
            <SocialNetwork src={facebook} alt="facebook" />
            <SocialNetwork src={instagram} alt="instagram" />
            <SocialNetwork src={youtube} alt="youtube" />
          </ContainerSocial>
        </MenuDescktop>

        <Burger open={open} onClick={() => ShowMenu()}>
          <div />
          <div />
          <div />
        </Burger>
      </NavBar>
    </Container>
  );
};

export { Menu };

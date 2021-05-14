import React from "react";
import {
  Container,
  FirstPicture,
  SecondPicture,
  Text,
  Logo,
  LogoDanone,
} from "./Footer.styles";
import firstLogo from "../../images/logo-danone.png";
import secondLogo from "../../images/logo-footer.png";

const Footer = () => {
  return (
    <Container>
      <FirstPicture>
        <LogoDanone src={firstLogo} />
      </FirstPicture>
      <SecondPicture>
        <Logo src={secondLogo} />
      </SecondPicture>
      <Text>
        <p>
          Términos y condiciones| Políticas de privacidad | Aviso de privacidad
        </p>
        <p>Danone de México 2017 ©. Todos los derechos reservados 2017</p>
      </Text>
    </Container>
  );
};

export { Footer };

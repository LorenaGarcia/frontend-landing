import React from "react";
import {
  Container,
  Title,
  Information,
  Ingredients,
  TitleIngredients,
  ImgStrawberryRM,
  ImgStrawberryITLD,
  ImgStrawberryITRD,
} from "./NutritionalInformation.styles";
import strawberryRM from "../../images/fresa-nutri-r-m.png";
import strawberryITLD from "../../images/fresa-i-t-l-d.png";
import strawberryITRD from "../../images/fresa-i-t-r-d.png";

const NutritionalInformation = () => {
  return (
    <Container>
      <ImgStrawberryITRD src={strawberryITRD} alt="strawberryITLD" />
      <Title>Información nutrimental</Title>
      <ImgStrawberryITLD src={strawberryITLD} alt="strawberryITLD" />

      <Information>
        <ImgStrawberryRM src={strawberryRM} alt="strawberryRM" />
        <p>Vitalínea® Bebible Guayaba 217gr</p>
        <p>Valor promedio por porción de 217gr</p>
        <p>Porciones por envase: 1</p>
      </Information>
      <Ingredients>
        <TitleIngredients>Ingredientes:</TitleIngredients>
        Leche descremada pasteurizada y/o reconstituida pasteurizada de vaca.
        3.5% preparado de fruta guayaba (acesulfame K y sucralosa
        (27.2mg/100g)), crema, almidón modificado, maltodextrina y cultivos
        lácticos.
      </Ingredients>
    </Container>
  );
};

export { NutritionalInformation };

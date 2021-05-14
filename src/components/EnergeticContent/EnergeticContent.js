import React from "react";
import {
  Container,
  Description,
  DescriptionLeft,
  ImageSBLM,
} from "./EnergeticContent.styles";
import strawberryLM from "../../images/fresa-energetic-l-m.png";

const EnergeticContent = () => {
  return (
    <>
      <ImageSBLM src={strawberryLM} alt="sblm" />
      <Container>
        <Description>
          <DescriptionLeft>Contenido energético kJ/kcal</DescriptionLeft>
          <p>413,2/97,9</p>
        </Description>

        <Description>
          <DescriptionLeft>Proteínas (g)</DescriptionLeft>
          <p>5.3</p>
        </Description>

        <Description>
          <DescriptionLeft>Grasas (lípidos) (g)</DescriptionLeft>
          <p>2.1</p>
        </Description>

        <Description>
          <DescriptionLeft>Grasas saturadas (g)</DescriptionLeft>
          <p>1.4</p>
        </Description>

        <Description>
          <DescriptionLeft>
            Carbohidratos (Hidratos de carbono) (g)
          </DescriptionLeft>
          <p>12.4</p>
        </Description>

        <Description>
          <DescriptionLeft>Azúcares (g)</DescriptionLeft>
          <p>7.7</p>
        </Description>

        <Description>
          <DescriptionLeft>Azúcares añadidos (g)</DescriptionLeft>
          <p>0.1</p>
        </Description>

        <Description>
          <DescriptionLeft>Fibra dietética (g)</DescriptionLeft>
          <p>0.0</p>
        </Description>

        <Description>
          <DescriptionLeft>Sodio (mg) </DescriptionLeft>
          <p>92.7</p>
        </Description>

        <Description>
          <DescriptionLeft>Calcio (mg) %VNR*</DescriptionLeft>
          <p>199.6</p>
        </Description>

        <Description>
          <DescriptionLeft>%VNR*</DescriptionLeft>
          <p>22</p>
        </Description>
      </Container>
    </>
  );
};

export { EnergeticContent };

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Container,
  Description,
  DescriptionLeft,
  ImageSBLM,
  StrawberryLTD,
  StrawberryHCTD,
  StrawberryHRTD,
} from "./EnergeticContent.styles";
import strawberryLM from "../../images/fresa-energetic-l-m.png";
import fresaLTD from "../../images/fresa-h-l-t-d.png";
import fresaHCTD from "../../images/fresa-h-c-t-d.png";
import fresaHRTD from "../../images/fresa-h-r-t-d.png";

const EnergeticContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    window.addEventListener(
      "touchmove",
      () => {
        AOS.refresh();
      },
      false
    );
  }, []);

  return (
    <>
      <ImageSBLM src={strawberryLM} alt="sblm" />
      <Container>
        <Description data-aos="fade-up-left">
          <DescriptionLeft>Contenido energético kJ/kcal</DescriptionLeft>
          <p>413,2/97,9</p>
        </Description>

        <Description data-aos="fade-right">
          <DescriptionLeft>Proteínas (g)</DescriptionLeft>
          <p>5.3</p>
        </Description>

        <Description data-aos="fade-up-left">
          <DescriptionLeft>Grasas (lípidos) (g)</DescriptionLeft>
          <p>2.1</p>
        </Description>

        <Description data-aos="fade-right">
          <DescriptionLeft>Grasas saturadas (g)</DescriptionLeft>
          <p>1.4</p>
        </Description>

        <Description data-aos="fade-up-left">
          <DescriptionLeft>
            Carbohidratos (Hidratos de carbono) (g)
          </DescriptionLeft>
          <p>12.4</p>
        </Description>

        <Description data-aos="fade-right">
          <DescriptionLeft>Azúcares (g)</DescriptionLeft>
          <p>7.7</p>
        </Description>

        <Description data-aos="fade-up-left">
          <DescriptionLeft>Azúcares añadidos (g)</DescriptionLeft>
          <p>0.1</p>
        </Description>

        <Description data-aos="fade-right">
          <DescriptionLeft>Fibra dietética (g)</DescriptionLeft>
          <p>0.0</p>
        </Description>

        <Description data-aos="fade-up-left">
          <DescriptionLeft>Sodio (mg) </DescriptionLeft>
          <p>92.7</p>
        </Description>

        <Description data-aos="fade-right">
          <DescriptionLeft>Calcio (mg) %VNR*</DescriptionLeft>
          <p>199.6</p>
        </Description>

        <Description data-aos="fade-up-left">
          <DescriptionLeft>%VNR*</DescriptionLeft>
          <p>22</p>
        </Description>
        <StrawberryLTD src={fresaLTD} alt="fresaLLTD" />
        <StrawberryHCTD src={fresaHCTD} alt="fresaHCTD" />
        <StrawberryHRTD src={fresaHRTD} alt="fresaHRTD" />
      </Container>
    </>
  );
};

export { EnergeticContent };

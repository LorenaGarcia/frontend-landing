import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ContainerProduct,
  Product,
  ContainerDescriptionPicture,
  DescriptionPicture,
  Flavors,
  Flavor,
  TitleFlavor,
  Name,
  Description,
  Button,
  StrawberryLM,
  StrawberryRM,
  StrawberryLD,
  StrawberryTD,
  StrawberryTLD,
  StrawberryBRD,
  Diagonal,
  ImageSello,
  ImageKcal,
  ContainerLogos,
  Circle,
  ImgArrow,
  ContainerCircle,
  FlexDescription,
} from "./ProductDescription.styles";
import productImage from "../../images/bote-fresa.png";
import fresaLM from "../../images/fresa-left-mobile.png";
import fresaRM from "../../images/fresa-r-m.png";
import fresaLD from "../../images/fresa-l-d.png";
import fresaTD from "../../images/fresa-t-d.png";
import fresaTLD from "../../images/fresa-t-l-d.png";
import fresaBRD from "../../images/fresa-b-r-d.png";
import sello from "../../images/sello.png";
import kcal from "../../images/kcal.png";
import arrow from "../../images/arrow.png";

const ProductDescription = () => {
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
      <ContainerProduct>
        <StrawberryTLD src={fresaTLD} alt="fresaTLD" />
        <StrawberryTD src={fresaTD} alt="fresaTD" />
        <StrawberryLM src={fresaLM} alt="fresaLM" />
        <StrawberryRM src={fresaRM} alt="fresaRM" />
        <Product>
          <ContainerDescriptionPicture>
            <DescriptionPicture src={productImage} alt="product" />
          </ContainerDescriptionPicture>
          <FlexDescription>
            <Flavors>
              <TitleFlavor>Sabor:</TitleFlavor>
              <Flavor isFlavor={true}>Fresa</Flavor>
              <Flavor>Guayaba</Flavor>
              <Flavor>Toronja</Flavor>
            </Flavors>
            <Name>Vitalínea® Bebible Fresa 217 gr.</Name>
            <Description>
              ¡La presentación ideal para llevar contigo! Vitalínea bebible es
              la opción si eres de las personas que siempre están activas y
              quieren probar algo sano, rico y práctico.
            </Description>
            <Button>Comprar en Walmart</Button>
            <ContainerLogos>
              <ImageSello src={sello} /> <ImageKcal src={kcal} />
            </ContainerLogos>
            <StrawberryBRD data-aos="zoom-in" src={fresaBRD} alt="fresaBRD" />
          </FlexDescription>
        </Product>
      </ContainerProduct>
      <Diagonal>
        <ContainerCircle>
          <Circle>
            <StrawberryLD src={fresaLD} alt="fresaLD" />
            <ImgArrow src={arrow} alt="arrow" />
          </Circle>
        </ContainerCircle>
      </Diagonal>
    </>
  );
};

export { ProductDescription };

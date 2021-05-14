import React from "react";
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
  Diagonal,
  ImageSello,
  ImageKcal,
  ContainerLogos,
  Circle,
  ImgArrow,
  ContainerCircle,
} from "./ProductDescription.styles";
import productImage from "../../images/bote-fresa.png";
import fresaLM from "../../images/fresa-left-mobile.png";
import fresaRM from "../../images/fresa-r-m.png";
import sello from "../../images/sello.png";
import kcal from "../../images/kcal.png";
import arrow from "../../images/arrow.png";

const ProductDescription = () => {
  return (
    <>
      <ContainerProduct>
        <StrawberryLM src={fresaLM} alt="fresaLM" />
        <StrawberryRM src={fresaRM} alt="fresaLM" />
        <Product>
          <ContainerDescriptionPicture>
            <DescriptionPicture src={productImage} alt="product" />
          </ContainerDescriptionPicture>
          <div>
            <Flavors>
              <TitleFlavor>Sabor:</TitleFlavor>
              <Flavor>Fresa</Flavor>
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
          </div>
        </Product>
      </ContainerProduct>
      <Diagonal>
        <ContainerCircle>
          <Circle>
            <ImgArrow src={arrow} alt="arrow" />
          </Circle>
        </ContainerCircle>
      </Diagonal>
    </>
  );
};

export { ProductDescription };

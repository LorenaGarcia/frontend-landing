import React from "react";
import {
  Container,
  Title,
  Image,
  Product,
  ContainerGallery,
  Scroll,
} from "./Gallery.styles";
import griego from "../../images/vitalinea-griego.png";
import sinazucar from "../../images/vitalinea-sin-azucar.png";
import bebible from "../../images/vitalinea-bebible.png";

const Gallery = () => {
  return (
    <Container>
      <Title>LA FAMILIA VITALÍNEA</Title>
      <Scroll>
        <ContainerGallery>
          <Product>
            <Image src={griego} alt="griego" />
            <p>Vitalínea Griego</p>
          </Product>

          <Product>
            <Image src={sinazucar} alt="griego" />
            <p>Vitalínea sin Azúcar</p>
          </Product>

          <Product>
            <Image src={bebible} alt="griego" />
            <p>Vitalínea Bebible</p>
          </Product>
        </ContainerGallery>
      </Scroll>
    </Container>
  );
};

export { Gallery };

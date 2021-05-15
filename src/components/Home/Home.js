import React from "react";
import { Container, Information, Title } from "./Home.styles";

import { ProductDescription } from "../ProductDescription";
import { NutritionalInformation } from "../NutritionalInformation";
import { EnergeticContent } from "../EnergeticContent";
import { Gallery } from "../Gallery";

const Home = () => {
  return (
    <Container>
      <ProductDescription />
      <Title>Información nutrimental</Title>
      <Information>
        <NutritionalInformation />
        <EnergeticContent />
      </Information>
      <Gallery />
    </Container>
  );
};

export { Home };

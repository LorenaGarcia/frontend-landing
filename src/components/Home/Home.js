import React from "react";
import { Container, Information } from "./Home.styles";

import { ProductDescription } from "../ProductDescription";
import { NutritionalInformation } from "../NutritionalInformation";
import { EnergeticContent } from "../EnergeticContent";

const Home = () => {
  return (
    <Container>
      <ProductDescription />
      <Information>
        <NutritionalInformation />
        <EnergeticContent />
      </Information>
    </Container>
  );
};

export { Home };

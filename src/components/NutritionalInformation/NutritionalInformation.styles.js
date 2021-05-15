import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  @media (min-width: 900px) {
    width: 30%;
  }
`;

const Title = styled.p`
  display: block;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 2.41px;
  color: #6f2e6d;

  @media (min-width: 900px) {
    display: none;
  }
`;

const Information = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: #000000;

  p {
    margin: 0;
  }
`;

const Ingredients = styled.div`
  margin-top: 2rem;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: #000000;
`;

const TitleIngredients = styled.p`
  margin-top: 2rem;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  margin: 0;
`;

const ImgStrawberryRM = styled.img`
  display: block;
  position: absolute;
  z-index: 1;
  height: 11rem;
  right: 0;

  @media (min-width: 900px) {
    display: none;
  }
`;

const ImgStrawberryITLD = styled.img`
  display: none;
  position: absolute;
  z-index: 1;
  height: 11rem;
  left: 0;

  @media (min-width: 900px) {
    display: block;
  }
`;

const ImgStrawberryITRD = styled.img`
  display: none;
  position: absolute;
  z-index: 1;
  height: 15rem;
  right: 0;

  @media (min-width: 900px) {
    display: block;
  }
`;

export {
  Container,
  Title,
  Information,
  Ingredients,
  TitleIngredients,
  ImgStrawberryRM,
  ImgStrawberryITLD,
  ImgStrawberryITRD,
};

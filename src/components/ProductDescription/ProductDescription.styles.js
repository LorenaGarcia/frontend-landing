import styled from "styled-components";

const ContainerProduct = styled.div`
  width: 100%;
  background-image: linear-gradient(to bottom, #f9e6e6, #ebacac);
  box-shadow: 0 14px 44px 0 rgba(0, 0, 0, 0.09);
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 7rem 1.5rem;
  padding-bottom: 1rem;

  @media (min-width: 700px) {
    flex-direction: row;
    padding: 7rem 10rem;
    align-items: center;
  }
`;

const ContainerDescriptionPicture = styled.div`
  text-align: center;
`;

const DescriptionPicture = styled.img`
  width: 7rem;

  @media (min-width: 700px) {
    height: 22rem;
    width: auto;
  }

  @media (min-width: 900px) {
    height: 26rem;
    width: auto;
    margin-right: 4rem;
  }

  @media (min-width: 1200px) {
    height: 26rem;
    width: auto;
    margin-right: 6rem;
  }
`;

const Flavors = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  text-align: center;
  color: #000000;

  @media (min-width: 900px) {
    grid-template-columns: 4rem 6rem 6rem 6rem;
    gap: 1rem;
  }
`;

const Flavor = styled.div`
  max-width: 5rem;
  background-color: ${(props) =>
    props.isFlavor ? "#ff00002b" : "transparent"};
  border: ${(props) => (props.isFlavor ? "none" : "1px solid #00000052")};
  border-radius: 11px;
  margin-top: 1rem;
  margin-left: 0.5rem;
  padding: 0.2rem 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleFlavor = styled.div`
  margin-top: 1rem;
  padding: 0.2rem 0;
  display: flex;
  align-items: center;
  justify-content: left;
`;

const Name = styled.p`
  text-align: left;
  color: #78246d;
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 1rem;

  @media (min-width: 900px) {
    font-size: 40px;
  }
`;

const Description = styled.p`
  text-align: left;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: #000000;
  margin-bottom: 3rem;
  margin-top: 0;

  @media (min-width: 900px) {
    font-size: 17px;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 3rem;
  background: #78246d;
  border: none;
  color: #ffffff;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  cursor: pointer;

  @media (min-width: 700px) {
    width: 16rem;
  }
`;

const StrawberryLM = styled.img`
  display: block;
  position: absolute;
  z-index: 1;
  height: 10rem;
  top: 3rem;

  @media (min-width: 700px) {
    display: none;
  }
`;

const StrawberryRM = styled.img`
  display: block;
  position: absolute;
  z-index: 1;
  height: 10rem;
  top: 1rem;
  right: 0;

  @media (min-width: 700px) {
    display: none;
  }
`;

const StrawberryLD = styled.img`
  display: none;
  position: absolute;
  z-index: 1;
  height: 15rem;
  left: 0;

  @media (min-width: 700px) {
    display: block;
  }
`;

const StrawberryTD = styled.img`
  display: none;
  position: absolute;
  z-index: 1;
  height: 8rem;
  top: 0;
  left: 50%;

  @media (min-width: 700px) {
    display: block;
  }
`;

const StrawberryTLD = styled.img`
  display: none;
  position: absolute;
  z-index: 1;
  height: 15rem;
  top: 0;
  left: 5%;

  @media (min-width: 700px) {
    display: block;
  }
`;

const StrawberryBRD = styled.img`
  display: none;
  position: absolute;
  z-index: 1;
  height: 15rem;
  right: 0;

  @media (min-width: 700px) {
    display: block;
  }
`;

const Diagonal = styled.div`
  background: linear-gradient(
    to left bottom,
    #ebacac,
    #ebacac 50%,
    50%,
    #ffffff 75%
  );
  height: 3rem;
  margin-bottom: 2rem;
`;

const ImageSello = styled.img`
  width: 3rem;
  height: 3rem;
`;

const ImageKcal = styled.img`
  width: 4rem;
  height: 3rem;
  margin-left: 2rem;
`;

const ContainerLogos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 1rem;

  @media (min-width: 900px) {
    justify-content: flex-start;
  }
`;

const Circle = styled.div`
  display: flex;
  width: 3rem;
  height: 3rem;
  background-color: #78246d;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
`;

const ImgArrow = styled.img`
  width: 1rem;
  height: 1rem;
`;

const ContainerCircle = styled.div`
  display: flex;
  justify-content: center;
`;

export {
  ContainerProduct,
  Product,
  DescriptionPicture,
  Flavors,
  Flavor,
  TitleFlavor,
  ContainerDescriptionPicture,
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
  StrawberryLD,
  StrawberryTD,
  StrawberryTLD,
  StrawberryBRD,
};

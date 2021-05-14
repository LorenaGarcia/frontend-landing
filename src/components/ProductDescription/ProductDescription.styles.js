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
`;

const ContainerDescriptionPicture = styled.div`
  text-align: center;
`;

const DescriptionPicture = styled.img`
  width: 7rem;
`;

const Flavors = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  font-family: OpenSans;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  text-align: center;
  color: #000000;
`;

const Flavor = styled.div`
  max-width: 5rem;
  border: 1px solid #00000052;
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
  font-family: OpenSans;
  font-size: 20px;
  font-weight: 300;
`;

const Description = styled.p`
  text-align: left;
  font-family: OpenSans;
  font-size: 14px;
  font-weight: 300;
  color: #000000;
`;

const Button = styled.button`
  width: 100%;
  height: 3rem;
  background: #78246d;
  border: none;
  color: #ffffff;
  font-family: OpenSans;
  font-size: 14px;
  text-align: center;
`;

const StrawberryLM = styled.img`
  position: absolute;
  z-index: 1;
  height: 10rem;
  top: 3rem;
`;

const StrawberryRM = styled.img`
  position: absolute;
  z-index: 1;
  height: 10rem;
  top: 1rem;
  right: 0;
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
};

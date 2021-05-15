import styled from "styled-components";

const Container = styled.div`
  padding: 2rem 1rem;
  background-color: #fafafa;
  margin-top: 3rem;
  padding-bottom: 0.5rem;

  @media (min-width: 900px) {
    padding: 0;
    margin-top: 0;
    margin-left: 1rem;
    width: 60%;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  color: #78246d;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 300;
  line-height: 3;

  p {
    min-width: 30%;
    margin: 0;
  }
`;

const DescriptionLeft = styled.div`
  margin-right: 1rem;
  width: 60%;
  text-align: right;
`;

const ImageSBLM = styled.img`
  display: block;
  position: absolute;
  z-index: 1;
  height: 15rem;
  left: 0;

  @media (min-width: 900px) {
    display: none;
  }
`;

const StrawberryLTD = styled.img`
  display: none;
  position: absolute;
  z-index: 1;
  height: 15rem;
  left: 0;

  @media (min-width: 700px) {
    display: block;
  }
`;

const StrawberryHCTD = styled.img`
  display: none;
  position: absolute;
  z-index: 1;
  height: 13rem;
  left: 20rem;

  @media (min-width: 700px) {
    display: block;
  }
`;

const StrawberryHRTD = styled.img`
  display: none;
  position: absolute;
  z-index: 1;
  height: 15rem;
  right: 0;

  @media (min-width: 700px) {
    display: block;
  }
`;
export {
  Container,
  Description,
  DescriptionLeft,
  ImageSBLM,
  StrawberryLTD,
  StrawberryHCTD,
  StrawberryHRTD,
};

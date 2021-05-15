import styled from "styled-components";
import background from "../../images/background.png";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  padding: 2rem 0;
`;

const Title = styled.p`
  text-align: center;
  color: #78246d;
  font-family: "Open Sans", sans-serif;
  font-size: 22px;
  font-weight: 300;
  margin-bottom: 5rem;

  @media (min-width: 900px) {
    font-size: 44px;
  }
`;

const Image = styled.img`
  width: 15rem;
  max-height: 20rem;
`;

const Scroll = styled.div`
  max-width: 20rem;
  overflow: hidden;

  @media (min-width: 700px) {
    max-width: 50rem;
  }

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 60rem;
    max-width: 60rem;
  }
`;

const Product = styled.div`
  text-align: center;
  color: #78246d;
  font-family: "Open Sans", sans-serif;
  font-size: 11px;
  font-weight: 300;

  @media (min-width: 900px) {
    font-size: 22px;
  }
`;

const ContainerGallery = styled.div`
  display: flex;
  align-items: flex-end;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export { Container, Title, Image, Product, ContainerGallery, Scroll };

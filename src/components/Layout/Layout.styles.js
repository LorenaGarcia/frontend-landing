import styled from "styled-components";

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;
  grid-template-areas:
    "main"
    "footer";
`;

const Main = styled.div`
  grid-area: main;
`;

const Footer = styled.div`
  grid-area: footer;
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  background-color: pink;
`;

export { Container, Main, Footer, Div };
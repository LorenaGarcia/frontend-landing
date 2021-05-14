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

const FooterInfo = styled.div`
  grid-area: footer;
`;

export { Container, Main, FooterInfo };

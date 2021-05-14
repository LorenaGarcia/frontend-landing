import styled, { css } from "styled-components";

const padding = css`
  padding: 1rem;
`;

const Container = styled.div`
  display: grid;
  margin-top: 2rem;
  grid-template-rows: auto 1fr;
  grid-template-columns: auto;
  grid-template-areas:
    "firstPicture secondPicture"
    "text text";

  @media (min-width: 481px) {
    grid-template-rows: 1fr;
    grid-template-columns: auto 1fr auto;
    grid-template-areas: "firstPicture  text secondPicture";
  }

  @media (min-width: 1200px) {
    grid-template-rows: 1fr;
    grid-template-columns: auto 1fr auto;
    grid-template-areas: "firstPicture  text secondPicture";
  }
`;

const FirstPicture = styled.div`
  ${padding}
  grid-area: firstPicture;
`;

const SecondPicture = styled.div`
  ${padding}
  grid-area: secondPicture;
  text-align: right;
`;

const Text = styled.div`
  ${padding}
  grid-area: text;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  color: #000000;
`;

const Logo = styled.img`
  height: 2rem;
`;

const LogoDanone = styled.img`
  height: 2.9rem;
`;

export { Container, FirstPicture, SecondPicture, Text, Logo, LogoDanone };

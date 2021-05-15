import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Information = styled.div`
  padding: 0 1.5rem;
  margin-top: 6rem;
  margin-bottom: 6rem;

  @media (min-width: 700px) {
    padding: 0 7rem;
  }

  @media (min-width: 900px) {
    padding: 0 15rem;
    margin-top: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`;

const Title = styled.p`
  margin-top: 6rem;
  display: none;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 32px;
  letter-spacing: 3.86px;
  color: #6f2e6d;

  @media (min-width: 900px) {
    display: block;
  }
`;

export { Container, Information, Title };

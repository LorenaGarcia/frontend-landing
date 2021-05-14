import styled from "styled-components";

const Container = styled.div`
  padding: 2rem 1rem;
  background-color: #fafafa;
  margin-top: 3rem;
  padding-bottom: 0.5rem;
`;

const Description = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  color: #78246d;
  font-family: OpenSans;
  font-size: 12px;
  font-weight: 300;
  line-height: 3;
  margin-bottom: 2rem;

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
  position: absolute;
  z-index: 1;
  height: 15rem;
  left: 0;
`;

export { Container, Description, DescriptionLeft, ImageSBLM };

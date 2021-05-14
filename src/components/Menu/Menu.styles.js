import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  position: absolute;
  z-index: 9;
`;

const NavBar = styled.div`
  position: sticky;
  background: rgba(255, 250, 250, 0.6);
  height: 5rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0;
  padding-top: 0;
`;

const Logo = styled.img`
  width: 8rem;
  height: 3rem;
  padding-left: 1rem;
  margin-bottom: ${(props) => props.open && "2rem"};
`;

const Burger = styled.button`
  margin-right: 1rem;
  top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #b98b3c;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      width: 1.7rem;
      opacity: ${(props) => (props.open ? "0" : "7")};
      transform: ${(props) =>
        props.open ? "translateX(20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const StyledMenu = styled.nav`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to top, #f9e6e6, #ebacac);
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  a {
    padding: 15px;
    font-family: OpenSans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #000000;
    text-decoration: none;
  }
`;

export { Container, NavBar, Logo, Burger, StyledMenu };

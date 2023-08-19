import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 90rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0rem 2rem 0rem;
  div {
    display: flex;

    padding: 5 auto;
  }
  img {
    size: 1;
  }
`;

export const MenuContainer = styled.div`
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;

  width: 11rem;
  height: 2.37rem;

  padding-right: 1rem;
  padding-left: 0.5rem;

  margin-right: 1rem;

  background: ${(props) => props.theme["purple-light"]};
  border-radius: 8px;

  p {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme["purple-dark"]};
  }
`;
export const StyledCar = styled.div`
  width: 2.5rem;
  height: 2.5rem;

  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: ${(props) => props.theme["yellow-light"]};
  button {
    width: 2.5rem;
    height: 2.5rem;

    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    cursor: pointer;

    border-radius: 8px;
    background: ${(props) => props.theme["yellow-light"]};
  }
`;

export const Counter = styled.div`
  .Count {
    width: 1.5rem;
    height: 1.5rem;

    margin-left: -12px;
    margin-top: -8px;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.theme["yellow-dark"]};
    color: ${(props) => props.theme["white"]};
    border-radius: 50%;

    opacity: 1;

    font-family: "bold", sans-serif;
  }
`;

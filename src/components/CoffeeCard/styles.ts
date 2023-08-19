import { styled } from "styled-components";

export const CoffeeContainer = styled.div`
  width: 16rem;
  /* height: 19.375rem; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-top-right-radius: 15%;
  border-top-left-radius: 5%;
  border-bottom-right-radius: 5%;
  border-bottom-left-radius: 15%;

  margin-bottom: 3rem;

  background: ${(props) => props.theme["gray-100"]};

  img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: -1.5rem;
    margin-bottom: 1rem;
  }

  span {
    padding: 5px 10px;
    border-radius: 16px;

    margin-left: 0.5rem;

    font-family: Roboto, sans-serif;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 700;
    line-height: 0.812rem;
    text-transform: uppercase;
    background: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow"]};
  }

  h2 {
    margin: 1rem;
    font-family: Baloo 2, sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.625;
  }

  p {
    margin-left: 1.6rem;

    font-family: Roboto, sans-serif;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem;
    color: ${(props) => props.theme["gray-600"]};
  }

  div {
    width: 100%;
    max-width: 13rem;

    margin-top: 1rem;
    margin-bottom: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    strong {
      max-width: 4.18rem;

      display: flex;
      align-items: center;

      h1 {
        font-family: Baloo 2, sans-serif;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 800;
        line-height: 130%;
      }

      h3 {
        font-family: Roboto, sans-serif;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;

        margin-right: 0.5rem;
      }
    }

    input {
      max-width: 4.5rem;
      display: flex;
      padding: 8px;
      justify-content: center;
      align-items: center;
      gap: 4px;

      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;

      border-radius: 8px;

      text-align: center;
      font-family: Roboto, sans-serif;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.312;

      background: ${(props) => props.theme["gray-500"]};
    }
    button {
      max-width: 2.5rem;
      display: flex;
      padding: 8px;
      justify-content: center;
      align-items: center;
      gap: 8px;

      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
      cursor: pointer;

      border-radius: 8px;
      background: ${(props) => props.theme["purple-dark"]};

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${(props) => props.theme["purple"]};
      }
    }
  }
`;

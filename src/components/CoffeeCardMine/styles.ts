import { styled } from "styled-components";

export const CoffeeMineContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1rem;
  padding-bottom: 1rem;

  border-bottom: 1px solid #e6e5e5;

  img {
    width: 100%;
    max-width: 4rem;
  }
  h4 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    color: #403937;
  }
  strong {
    display: flex;
    justify-content: space-between;
    gap: 0.3rem;

    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }

  .CardButton {
    display: flex;
    justify-content: start;
    gap: 1rem;
    input {
      max-width: 4.5rem;
      height: 100%;
      max-height: 2rem;

      display: flex;

      justify-content: center;
      align-items: center;

      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;

      border-radius: 8px;

      text-align: center;
      font-family: Roboto, sans-serif;
      font-size: 16px;
      font-style: normal;
      background: ${(props) => props.theme["gray-300"]};
    }
    button {
      display: flex;
      height: 2rem;
      padding: 0px 8px;
      justify-content: center;
      align-items: center;
      gap: 4px;
      background: ${(props) => props.theme["gray-300"]};
      color: #574f4d;
    }
  }
  .CardContainer {
    display: flex;
    flex-direction: column;

    div {
      align-items: center;
      text-align: center;
    }
  }
`;

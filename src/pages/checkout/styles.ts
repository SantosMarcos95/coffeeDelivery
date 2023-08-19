import { styled } from "styled-components";

export const PainelContainer = styled.div`
  width: 100%;
  max-width: 90rem;
  display: flex;

  margin-top: 0.3rem;
`;

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 90rem;

  gap: 1rem;
`;

export const DeliveryInformationContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  h3 {
    font-family: Baloo 2;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 40rem;
  padding: 2.5rem;

  background: ${(props) => props.theme["gray-100"]};
  form {
    fieldset {
      border: none;
      div {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 1rem;
      }
      h3 {
        font-family: Roboto;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
      }
      p {
        margin-left: 2.3rem;
        margin-bottom: 1.5rem;
        font-family: Roboto;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
      }
    }
  }
`;
export const PaymentCointainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme["gray-100"]};
  span {
    display: flex;
    gap: 0.5rem;
    div {
      display: flex;
      flex-direction: column;
      h3 {
        font-family: Roboto;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
      }
      p {
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
      }
    }
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
`;

export const MainCoffeContainer = styled.div`
  width: 100%;
  max-width: 28rem;

  display: flex;
  flex-direction: column;

  gap: 1rem;
  h3 {
    font-family: Baloo 2;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
`;

export const SelectCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;

  border-top-right-radius: 15%;
  border-top-left-radius: 5%;
  border-bottom-right-radius: 5%;
  border-bottom-left-radius: 15%;
  align-items: center;
  width: 100%;

  padding: 2.5rem;
  gap: 1rem;

  background: ${(props) => props.theme["gray-100"]};

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    h3 {
      font-family: Roboto;
      font-style: normal;
      font-weight: 700;
    }
    p {
      font-family: Roboto;
      font-style: normal;
      font-weight: 400;
    }
  }
  button {
    display: flex;
    padding: 12px 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    align-self: stretch;

    border: none;
    cursor: pointer;

    border-radius: 6px;
    color: ${(props) => props.theme["white"]};
    background: ${(props) => props.theme["yellow"]};
  }
`;

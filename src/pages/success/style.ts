import { styled } from "styled-components";

export const PainelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  max-width: 90rem;

  margin-top: 5rem;
`;

export const IntroductionContainer = styled.div`
  width: 100%;
  max-width: 33.5rem;

  gap: 4px;

  display: flex;
  flex-direction: column;

  .titleStyle {
    font-family: Baloo 2;
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;

    color: ${(props) => props.theme["yellow-dark"]};
  }
  .paragrafyStyle {
    font-family: Roboto;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;

    margin-bottom: 2.5rem;
  }
  .painelStyles {
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    gap: 2rem;

    border: 1px solid;
    border-image: linear-gradient(#c47f17, #4b2995);
    border-image-slice: 1;

    border-top-right-radius: 15%;
    border-top-left-radius: 5%;
    border-bottom-right-radius: 5%;
    border-bottom-left-radius: 15%;
  }
  .enderecoStyle {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.8rem;
    div {
      display: flex;
      flex-direction: column;
      span {
        font-family: Roboto;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
      }
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  margin-top: 6.5rem;
`;

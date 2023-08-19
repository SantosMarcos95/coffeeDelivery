import { styled } from "styled-components";

export const ButtonContainer = styled.div`
  width: 100%;
  div {
    width: 100%;
    max-width: 90%;

    display: flex;
    padding: 1rem;

    gap: 12px;
    align-items: center;

    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;
    color: #574f4d;

    border-radius: 6px;
    border: none;
    cursor: pointer;

    background: ${(props) => props.theme["gray-300"]};
    &.selected {
      background: ${(props) => props.theme["purple-light"]};
      border: 1px solid ${(props) => props.theme["purple-dark"]};
      padding: 0.9rem;
    }
  }
`;

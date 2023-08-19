import styled from "styled-components";

export const InputContainer = styled.div`
  input {
    width: 100%;
    padding: 12px;
    margin-bottom: 1rem;

    display: flex;
    align-items: center;
    gap: 4px;

    font-family: Roboto;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;

    border: 0 none;
    outline: 0;

    border-radius: 4px;
    background: ${(props) => props.theme["gray-300"]};

    &:focus {
      border: 1px solid ${(props) => props.theme["yellow-dark"]};
    }
  }
`;

import styled from "styled-components";

export const GradFundo = styled.div`
  width: 100%;
  /* fill: #ebc136;
  opacity: 0.15;
  fill: #8047f8;
  opacity: 0.15;
  filter: blur(80px); */
`;

export const HomeContainer = styled.div`
  width: 100%;

  gap: 2rem;
  padding: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 5rem;
  background: linear-gradient(
    180deg,
    rgba(128, 71, 248, 0.05) 0%,
    rgba(235, 193, 54, 0.05) 25%
  );
  border-radius: 1rem;
  div {
    width: 100%;
    max-width: 90rem;

    display: flex;
    justify-content: space-between;
  }
`;

export const IntroContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    width: 100%;
    line-height: 3rem;
    margin-bottom: 1rem;
    font-family: Baloo 2, sans-serif;
    font-size: 3rem;
    font-style: normal;
    font-weight: 800;
    line-height: 3.875rem;
  }

  p {
    width: 100%;
    font-family: Roboto, sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.625rem;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: flex-start;

    margin-top: 1rem;
    gap: 1rem;
  }
`;
export const StatusInformationLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 2rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    p {
      font-family: Roboto, sans-serif;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.312rem;
    }
  }
`;
export const StatusInformationRight = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;
  div {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 1rem;

    p {
      margin-left: 1rem;
      font-family: Roboto, sans-serif;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.312rem;
    }
  }
`;

export const ImgContainer = styled.div`
  justify-content: end;
`;
export const CoffeeList = styled.div`
  width: 100%;
  max-width: 90rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 4rem;

  h2 {
    margin-top: 3rem;
    font-family: Baloo 2, sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 2.625;
  }

  .coffee-container {
    width: 100%;
    display: grid;

    gap: 2rem;
    grid-template-columns: repeat(4, 1fr);
  }
`;

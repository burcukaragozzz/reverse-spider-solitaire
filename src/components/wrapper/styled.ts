import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 100px);
  background: ${({ theme }) => theme.colors.backgroundGradient};
  background-image: url("/images/background-img.png");
  background-size: cover;
  background-repeat: no-repeat;
`;

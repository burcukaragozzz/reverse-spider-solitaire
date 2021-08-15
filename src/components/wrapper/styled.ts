import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height:100%;
  background: ${({ theme }) => theme.colors.background};
`;

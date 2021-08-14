import styled from "styled-components/macro";

export const BaseButton = styled.button`
  font-size: 24px;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: #56b85e;
  border-radius: 8px;
  border: none;
  padding: 12px 32px;
  margin-bottom: 1rem;
  cursor: pointer;
`;

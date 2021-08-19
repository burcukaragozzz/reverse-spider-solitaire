import styled from "styled-components/macro";

export const BaseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-family: "Game";
    line-height: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.buttonBg};
    border-radius: 8px;
    border: none;
    padding: 12px 32px;
    cursor: pointer;
`;

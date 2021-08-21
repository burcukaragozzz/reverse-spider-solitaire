import styled from "styled-components/macro";

export const ToggleContainer = styled.button`
    position: relative;
    background: ${({ theme }) => theme.colors.toggleGradient};
    border: 1px solid ${({ theme }) => theme.colors.toggleBorder};
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    width: 4.6rem;
    height: 2rem;

    &:focus {
        outline: none;
    }
    img {
        transition: all 0.3s linear;

        // light icon
        &:first-child {
        transform: ${({ theme }) => theme.name === "light" ? "translateY(0)" : "translateY(100px)"}}
    
        // dark icon
        &:nth-child(2) {
        transform: ${({ theme }) => theme.name === "light" ? "translateY(-100px)" : "translateY(0)"}}
    }
`;

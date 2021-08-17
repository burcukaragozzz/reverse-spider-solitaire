import styled from "styled-components/macro";

export const ToggleContainer = styled.button<{ themeName: string }>`
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

    div {
        display: flex;
        height: auto;
        width: 1.5rem;

        img {
            transition: all 0.3s linear;

            // light icon
            &:first-child {
            transform: ${({ themeName }) => themeName === "light" ? "translateY(0)" : "translateY(100px)"}}
        
            // dark icon
            &:nth-child(2) {
            transform: ${({ themeName }) => themeName === "light" ? "translateY(-100px)" : "translateY(0)"}}
        }
    }
`;

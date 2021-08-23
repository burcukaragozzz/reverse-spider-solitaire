import styled from "styled-components/macro";

export const Container = styled.div``;

export const CardBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    cursor: pointer;
    border-radius: 6px;
    width: 6.8vw;
    height: 9.6vw;
    margin-bottom: -8.0vw;
    background-color: ${({ theme }) => theme.colors.background} ;

    ${({ isSelected }) => isSelected && ` 
        box-shadow: 2px 2px 4px black !important;
        border: 2px solid black;
    `
    }

    &:hover {
        box-shadow: 4px 4px 10px rgb(247, 210, 0);
    }

    @media (max-width: 768px) {
        margin-bottom: -7vw;
        width: 8vw;
        height: 11vw;
        border-radius: 4px;
    }
`;

export const CardImage = styled.img<{isVisible: boolean}>`
    width: 100%;
    height: 100%;
    opacity: ${({ isVisible }) => isVisible ? 1 : 0 };
    transition: opacity 0.3s;
`;
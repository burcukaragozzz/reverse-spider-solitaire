import styled from "styled-components/macro";

export const Container = styled.div``;

export const CardBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    cursor: pointer;
    border-radius: 4px;
    width: 6.8vw;
    height: 9.6vw;
    margin-bottom: -8.0vw;

    &:hover {
        box-shadow: 4px 4px 10px rgb(247, 210, 0);
    }

    ${({ isSelected }) => isSelected && ` 
        box-shadow: 2px 2px 4px black !important;
        border: 2px solid black;
    `
    }

    @media (max-width: 768px) {
        margin-bottom: -7vw;
        width: 7.6vw;
        height: 10.6vw;
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
`;
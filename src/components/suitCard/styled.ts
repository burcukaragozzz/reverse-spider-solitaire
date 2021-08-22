import styled from "styled-components/macro";

export const SuitBox = styled.div`
    cursor: pointer;

    @media (max-width: 768px) {
        display: flex;
        flex-basis: calc(50% - 20px);
        justify-content: center;
    }
`;

export const Suit = styled.img`
    max-width: 100%;
    height: 100%;
    transition: .5s; 

    &:hover{
        cursor: pointer;
        transform: scale(1.1);
    }

    ${({ isSelected }) => isSelected && ` 
        transform: scale(1.1);
    `}
`;

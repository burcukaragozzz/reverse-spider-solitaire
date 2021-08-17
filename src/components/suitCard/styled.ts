import styled from "styled-components/macro";

export const SuitBox = styled.div`
    width: 200px;
    height: 300px;
    cursor: pointer;
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

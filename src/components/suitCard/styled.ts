import styled from "styled-components/macro";

export const SuitBox = styled.div`
    width: 200px;
    height: 300px;
    cursor: pointer;
`;

export const Suit = styled.img`
    max-width: 100%;
    height: 100%;
    opacity: .8;
    transition: .5s; 

    &:hover {
        cursor: pointer;
        opacity: 1;
        transform: scale(1.1);
    }
`;

import styled from "styled-components/macro";

export const SuitBox = styled.div`
    width: 150px;
    height: 150px;
    display: flex;
    padding: 30px;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background-color: #d0e5f2;
    box-shadow: 2px 3px 4px #1f333e;
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

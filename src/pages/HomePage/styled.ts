import styled from "styled-components/macro";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px;
    height: 100%;
`;

export const Menu = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 100%;
`;

export const SuitsContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 60px;
`;

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



import styled from "styled-components/macro";

export const GameArea = styled.div`
    padding: 24px;
`;

export const TopContainer = styled.div`
    position: relative;
    height: 115px;
`;

export const RemCardsContainer = styled.div`
    position: absolute;
    display: flex;
    left: 50px;
`;

export const CompletedDeckCards = styled.div`
    position: absolute;
    right: 0;
    display: flex;
    gap: 10px;
`

export const CardsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 0;
`;

export const CardContainer = styled.div`
    transition: all 2s smooth;
`;

export const DeckContainer = styled.div`
    display: flex;
    flex-direction: column;
`;



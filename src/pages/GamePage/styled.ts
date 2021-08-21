import styled from "styled-components/macro";
import { FullPageView } from 'definitions/styled-components';

export const PageContainer = styled(FullPageView)`
    position: relative;
    padding: 24px;
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 4% 0 10%;
    margin-bottom: 50px;
`;

export const DeckContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Container = styled.div`
    position: relative;
    margin-bottom: 8%;
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
`;

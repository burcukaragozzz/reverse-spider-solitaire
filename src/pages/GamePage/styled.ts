import styled from "styled-components/macro";
import { FullPageView } from 'definitions/styled-components';

export const PageContainer = styled(FullPageView)`
    padding: 24px;
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5% 0 10%;
`;

export const DeckContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

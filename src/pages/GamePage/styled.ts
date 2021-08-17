import styled from "styled-components/macro";
import { FullPageView } from 'definitions/styled-components';

export const PageContainer = styled(FullPageView)<{themeName: string}>`
    padding: 24px;
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 4% 0 10%;
    z-index: 1;
    margin-bottom: 50px;
`;

export const DeckContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

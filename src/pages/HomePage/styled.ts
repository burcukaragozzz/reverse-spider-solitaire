import styled from "styled-components/macro";
import { FullPageView } from 'definitions/styled-components';

export const PageContainer = styled(FullPageView)<{ themeName: string }>`
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




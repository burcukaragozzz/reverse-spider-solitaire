import styled from "styled-components/macro";
import { FullPageView, TransparentButton } from 'definitions/styled-components';

export const PageContainer = styled(FullPageView)<{ themeName: string }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px;
`;

export const Menu = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 100%;
   z-index: 2;
`;

export const SuitsContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 60px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
`;

export const RulesButton = styled(TransparentButton)`
    position: absolute;
    bottom: 0;
    right: 3%;
`;

export const Icon = styled.img`
    margin-right: 5px;
    transform: scaleX(-1);
`;


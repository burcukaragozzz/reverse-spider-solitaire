import styled from "styled-components/macro";
import { Button } from "components";

export const PanelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    width: 100%;
    padding: 20px 24px; 
`;

export const BackButton = styled(Button)`
    padding: 12px;
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.transparent};
    color: ${({ theme }) => theme.colors.textColor};
`;

export const Icon = styled.img`
    padding-right: 10px;
`;

export const RightSide = styled.div`
    display: flex;
    gap: 40px;

`;

export const Section = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.textColor};
`;

export const Text = styled.span`

`;

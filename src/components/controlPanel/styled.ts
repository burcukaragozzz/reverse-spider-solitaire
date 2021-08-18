import styled from "styled-components/macro";

export const PanelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    width: 100%;
    padding: 8px 24px; 
    font-size: 20px;
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
    margin-right: 5px;
`;

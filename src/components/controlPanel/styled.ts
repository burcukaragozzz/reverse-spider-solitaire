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
    font-size: 22px;

    @media (max-width: 400px) {
        font-size: 14px;
        padding: 8px;
    }

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

export const Icon = styled.img`
    padding-right: 10px;
`;

export const RightSide = styled.div`
    display: flex;
    gap: 40px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 5px;
    }
`;

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-end;
    min-width: 140px;
    color: ${({ theme }) => theme.colors.textColor};

    @media (max-width: 768px) {
        min-width: 100px;
    }
`;

export const Text = styled.span`
    margin-right: 5px;
`;

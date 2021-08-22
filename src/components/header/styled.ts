import styled from "styled-components/macro";

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.headerBg};
    padding: 10px 20px;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;

`;

export const HeaderText = styled.span`
    font-size: 36px;
    color: ${({ theme }) => theme.colors.lightGrey};
    padding-left: 24px;

    @media (max-width: 768px) {
        font-size: 26px;
    }
`;

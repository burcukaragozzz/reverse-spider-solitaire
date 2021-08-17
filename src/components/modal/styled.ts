import styled from "styled-components/macro";


export const ModalWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 999;
    position: absolute;
    top: 0;
    left: 0;
`;

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.colors.modalBg};
    box-shadow: 1px 1px 3px  ${({ theme }) => theme.colors.lightGreen};
    color: ${({ theme }) => theme.colors.textColor};
    padding: 10px 60px;
    min-height: 25%;
    min-width: 25%;
    border-radius: 8px;
`;

export const Header = styled.span`
    font-size: 22px;
    width: 100%;
`;

export const Content = styled.div``;
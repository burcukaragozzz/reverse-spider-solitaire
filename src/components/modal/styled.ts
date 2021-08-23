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
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.modalBg};
    box-shadow: 1px 1px 3px  ${({ theme }) => theme.colors.lightGreen};
    color: ${({ theme }) => theme.colors.textColor};
    padding: 25px 60px;
    min-height: 30%;
    min-width: 30%;
    border-radius: 8px;
    margin: 30px;
`;

export const Header = styled.span`
    font-size: 22px;
    margin-bottom: 8px;
    width: 100%;
`;

export const ButtonContainer = styled.span`
    display: flex;
    gap: 20px;
`;

export const Content = styled.div`
    margin-bottom: 30px;
    font-size: 18px;
`;
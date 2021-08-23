import styled from "styled-components/macro";
import { FullPageView, TransparentButton } from 'definitions/styled-components';

export const PageContainer = styled(FullPageView)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px;
`;

export const Text = styled.span`
    color: ${({ theme }) => theme.colors.textColor};
    font-size: 64px;
    text-align: center;
`;

export const GoBackButton = styled(TransparentButton)`
    position: absolute;
    left: 10px;
    bottom: 5px;
    // margin-top: 100px;
`;

export const Icon = styled.img`
    padding-right: 10px;
`;


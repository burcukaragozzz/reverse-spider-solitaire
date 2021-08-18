import styled from "styled-components/macro";
import { FullPageView, TransparentButton } from 'definitions/styled-components';

export const PageContainer = styled(FullPageView)<{ themeName: string }>`
    display: flex;
    flex-direction: column;
    padding: 2% 12%;
`;

export const RulesContainer = styled.div`
    z-index: 2;
`;

export const Info = styled.p`
    color: ${({ theme }) => theme.colors.textColor};
    line-height: 24px;
    font-size: 18px;
`;

export const Rules = styled.ul`
    margin: 12px 0;
    padding: 0;
`;

export const Title = styled.span`
    margin-bottom: 20px;
    line-height: 42px;
    color: ${({ theme }) => theme.colors.green};
`;

export const Rule = styled.li`
    line-height: 24px;
    color: ${({ theme }) => theme.colors.textColor};
    list-style-image: url('/icons/spider-icon.svg');
`;

export const GoBackButton = styled(TransparentButton)`
    position: absolute;
    left: 10px;
    bottom: 5px;
`;

export const Icon = styled.img`
    padding-right: 10px;
`;

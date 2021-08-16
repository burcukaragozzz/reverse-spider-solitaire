import styled from 'styled-components/macro';

export const FullPageView = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.background};
`;

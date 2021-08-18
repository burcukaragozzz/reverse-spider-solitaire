import styled from 'styled-components/macro';

export const FullPageView = styled.div<{ themeName: string }>`
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 80px);
    background: ${({ theme }) => theme.colors.background};


    &:before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-image: url('/images/bg-img.png');
        background-size: cover;
        background-repeat: no-repeat;
        opacity: ${({ themeName }) => (themeName === 'light' ? '.2' : '.8')}}
    }
`;

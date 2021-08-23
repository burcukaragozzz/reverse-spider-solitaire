import styled from "styled-components/macro";

export const CardBody = styled.div<{ style: React.CSSProperties }>`
    width: 6.8vw;
    height: 9.6vw;
    border-radius: 0.6vw;
    box-shadow: 0px 1px 4px  ${({ theme }) => theme.colors.borderColor};

    ${({ style }) => style};

    @media (max-width: 768px) {
        margin-left: 0 !important;
    }
 
    ${({ imageUrl }) => imageUrl && ` 
        background-color: ${({ theme }) => theme.colors.lightGrey} ;
        background-image: url(${imageUrl});
        background-size: cover;
        background-repeat: no-repeat;
        border: 1px solid black;
        box-shadow: none;
    `};
`;
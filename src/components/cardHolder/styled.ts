import styled from "styled-components/macro";

export const CardBody = styled.div`
    width: 6.8vw;
    height: 9.6vw;
    border-radius: 0.6vw;
    background-color: lightgrey;
    border: 1px solid black;

    ${({ isRemainingCard }) => isRemainingCard && ` 
      background-image: url("/images/card_back.png");
      background-size: contain;
      background-repeat: no-repeat;
      margin-left: -50px;
    `};
`;


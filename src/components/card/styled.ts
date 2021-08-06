import styled from "styled-components/macro";

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
	padding: 5px;
  border: 1px solid black;
  cursor: pointer;
  width: 7vw;
  height: 9.6vw;
  border-radius: 0.6vw;
	background-color: white;

  &:hover {
    box-shadow: 4px 4px 10px rgb(247, 210, 0);
  }

  ${({ isDown }) => isDown && ` 
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("/images/card_back.png");
    text-decoration: transparent;
    margin-bottom: -7.5vw;
  `};

`;

export const CardValue = styled.span<{ right: boolean }>`
  font-size: 18px;
  visibility: ${({ isContentVisible }) => isContentVisible ? "visible" : "hidden"};
  align-self: ${({ right }) => right ? "flex-end" : "flex-start"}
`;

export const DiamondLogo = styled.img`
  height: 90px;
  width: 65px;
  margin: 0 auto;
  visibility: ${({ isContentVisible }) => isContentVisible ? "visible" : "hidden"};
`;
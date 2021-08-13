import styled from "styled-components/macro";

export const CardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  cursor: pointer;
  width: 7vw;
  height: 9.8vw;
  border-radius: 6px;
	background-color: white;
  margin-bottom: -7.5vw;

  &:hover {
    box-shadow: 4px 4px 10px rgb(247, 210, 0);
  }

  ${({ isSelected }) => isSelected && ` 
    box-shadow: 2px 2px 4px black !important;
    border: 2px solid black;
  `
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;

import styled from "styled-components/macro";

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: red;
  border: solid 1px #aaa;
	border-radius: 9px;
	width: 100px;
	height: 160px;
	float:left;
	background-color: white;
	padding: 5px;
	margin: 5px;

  &:hover {
    box-shadow: 4px 4px 10px rgb(247, 210, 0);
  }
`;

export const CardValue = styled.span<{ right: boolean }>`
  font-size: 18px;
  align-self: ${({ right }) => right ? "flex-end" : "flex-start"}
`;

export const DiamondLogo = styled.img`
  height: 90px;
  width: 65px;
  margin: 0 auto;
`;

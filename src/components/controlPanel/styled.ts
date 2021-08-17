import { Button } from "components";
import styled from "styled-components/macro";

export const PanelContainer = styled.div`

  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  padding: 20px 24px; 
`;

export const BackButton = styled(Button)`
  padding: 12px;
  font-size: 16px;
  background-color: #59C7DB
`;

export const BackIcon = styled.img`
`;

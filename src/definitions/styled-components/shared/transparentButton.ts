import { Button } from 'components';
import styled from 'styled-components/macro';

export const TransparentButton = styled(Button)`
    padding: 12px;
    font-size: 20px;
    background-color: ${({ theme }) => theme.colors.transparent};
    color: ${({ theme }) => theme.colors.textColor};
`;
